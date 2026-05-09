export type Access = (args: { req: { user?: unknown } }) => boolean | Record<string, unknown>
export type Field = Record<string, unknown>
export type CollectionConfig = { slug: string; auth?: boolean; upload?: boolean; admin?: Record<string, unknown>; access?: Record<string, Access | (() => boolean)>; fields: Field[] }
export type GlobalConfig = { slug: string; access?: Record<string, Access | (() => boolean)>; fields: Field[] }
