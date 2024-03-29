import * as P from '@konker.dev/effect-ts-prelude';
import { toTinyError } from '@konker.dev/tiny-error-fp';
import H from 'handlebars';

// --------------------------------------------------------------------------
export const ERROR_TAG = 'HandlebarsError';
export type ERROR_TAG = typeof ERROR_TAG;

export const toHandlebarsError = toTinyError<ERROR_TAG>(ERROR_TAG);
export type HandlebarsError = ReturnType<typeof toHandlebarsError>;

// --------------------------------------------------------------------------
export function handlebarsCompile(
  templateStr: string,
  helpers: Record<string, H.HelperDelegate> = {},
  partials: ReadonlyArray<Record<string, H.TemplateDelegate>> = []
): P.Effect.Effect<H.TemplateDelegate, HandlebarsError> {
  return P.Effect.try({
    try: () => {
      // eslint-disable-next-line fp/no-unused-expression
      Object.keys(helpers).forEach((name) => H.registerHelper(name, helpers[name]!));
      // eslint-disable-next-line fp/no-unused-expression
      partials.forEach((partial) => H.registerPartial(partial));
      return H.compile(templateStr);
    },
    catch: toHandlebarsError,
  });
}

export const handlebarsRender =
  (context: unknown) =>
  (template: H.TemplateDelegate): P.Effect.Effect<string, HandlebarsError> =>
    P.Effect.try({
      try: () => template(context),
      catch: toHandlebarsError,
    });

export function handlebarsRender2(
  context: unknown,
  template: H.TemplateDelegate
): P.Effect.Effect<string, HandlebarsError> {
  return handlebarsRender(context)(template);
}

export const handlebars =
  (
    templateStr: string,
    helpers: Record<string, H.HelperDelegate> = {},
    partials: Array<Record<string, H.TemplateDelegate>> = []
  ) =>
  (context: unknown): P.Effect.Effect<string, HandlebarsError> =>
    P.pipe(handlebarsCompile(templateStr, helpers, partials), P.Effect.flatMap(handlebarsRender(context)));
