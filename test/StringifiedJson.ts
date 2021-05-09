import * as t from 'io-ts'
import * as E from 'fp-ts/Either'
import * as Json from 'fp-ts/Json'
import { pipe, constFalse, constant } from 'fp-ts/function'

// TODO: TEST
// TODO: pull this into io-ts-types (and rename to StringifiedJson)
export const StringifiedJson = <C extends t.Mixed>(codec: C) =>
    new t.Type<t.TypeOf<C>, t.OutputOf<C>, t.InputOf<C>>(
        `StringifiedJSON(${codec.name})`,
        (u): u is t.TypeOf<C> =>
            typeof u !== 'string'
                ? false
                : pipe(
                      Json.stringify(u),
                      E.fold(constFalse, codec.is.bind(null))
                  ),
        (u, c) =>
            pipe(
                t.string.validate(u, c),
                E.chain(s =>
                    pipe(
                        E.parseJSON(s, E.toError),
                        E.fold(
                            constant(t.failure(u, c)),
                            codec.decode.bind(null)
                        )
                    )
                )
            ),
        // DISCUSS: should this not be to re-stringify?
        codec.encode
    )
