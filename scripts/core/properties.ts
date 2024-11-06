export const Properties = {
  drawControls: {type: 'bool' as const, value: true},
  steps       : {type: 'int' as const, value: 1, min: 0, max: 10, slideSpeed: 5},
  boolVal     : {type: 'bool' as const, value: true},
  panel: {
    type  : 'panel' as const,
    float : {type: 'float' as const, value: 0, min: 0, max: 10, step: 0.05, decimalPlaces: 3},
    slider: {type: 'float' as const, slider: true, value: 0, min: 0, max: 10, step: 0.05, decimalPlaces: 3},
  },
}
