/* @flow */

'use strict'

/**
 * Utilities related to GraphQL.
 */

import type {
  GraphQLObjectType as GQObjectType,
  GraphQLInputObjectType as GQInputObjectType
} from 'graphql'

import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString
} from 'graphql'

/**
 * Returns empty GraphQLObjectType.
 */
export function getEmptyObjectType () : GQObjectType {
  return new GraphQLObjectType({
    name: 'placeholder',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => {
          return 'This interface offers no query.'
        }
      }
    }
  })
}

/**
 * Returns empty GraphQLInputObjectType.
 */
export function getEmptyInputObjectType () : GQInputObjectType {
  return new GraphQLInputObjectType({
    name: 'placeholder',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => {
          return 'This interface offers no mutation.'
        }
      }
    }
  })
}
