import { describe, expect, test } from '@jest/globals';
import SwaggerUI from '../../docs/swagger-ui-es-bundle';

describe('webpack browser es-bundle build', () => {
  test('should export a function for es-bundle', () => {
    expect(SwaggerUI).toBeInstanceOf(Function);
  });
});
