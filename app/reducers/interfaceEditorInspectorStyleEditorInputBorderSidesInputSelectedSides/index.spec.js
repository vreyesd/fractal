/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides,
} from '../../actions/interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides';

describe('interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides action creator', () => {
    const selectedSides = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides(selectedSides))
    ).toEqual(selectedSides);
  });
});
