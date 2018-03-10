import assert from 'assert';
import appState from '../../src/reducers/appState';

describe('onboarding reducer', () => {
  describe('UPDATE_ONBOARDING_STATE', () => {
    it('should update the onboarding state', () => {
      assert.deepEqual(
        appState({}, {
          type: 'UPDATE_ONBOARDING_STATE',
          onboarded: false,
        }), false
      );
    });
  });
});
