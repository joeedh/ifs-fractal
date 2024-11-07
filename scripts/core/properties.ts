const onchange = () => {
  if (_appstate !== undefined && _appstate.ifs.running) {
    _appstate.ifs.reset()
  }
}

export const Properties = {
  drawControls: {type: 'bool' as const, value: true},
  steps       : {type: 'int' as const, value: 1, min: 0, max: 10, slideSpeed: 5},
  boolVal     : {type: 'bool' as const, value: true},
  float       : {panel: 'panel2', type: 'float' as const, value: 0, min: 0, max: 10, step: 0.05, decimalPlaces: 3},
  angle1: {
    panel        : 'Parameters',
    type         : 'float' as const,
    roller       : true,
    value        : 0,
    min          : -Math.PI * 2,
    max          : Math.PI * 2,
    step         : 0.01,
    decimalPlaces: 2,
    baseUnit     : 'radian',
    displayUnit  : 'degree',
    onchange,
  },
  scale1: {
    panel        : 'Parameters',
    type         : 'float' as const,
    roller       : true,
    value        : 1.0,
    min          : -10.0,
    max          : 10.0,
    step         : 0.01,
    decimalPlaces: 3,
    unit         : 'none',
    onchange,
  },
  offset1: {
    panel        : 'Parameters',
    type         : 'float' as const,
    roller       : true,
    value        : 0,
    min          : -0.5,
    max          : 0.5,
    step         : 0.01,
    decimalPlaces: 3,
    unit         : 'none',
    onchange,
  },
  angle2: {
    panel        : 'Parameters',
    type         : 'float' as const,
    roller       : true,
    value        : 0,
    min          : -Math.PI * 2,
    max          : Math.PI * 2,
    step         : 0.01,
    decimalPlaces: 2,
    baseUnit     : 'radian',
    displayUnit  : 'degree',
    onchange,
  },
  scale2: {
    panel        : 'Parameters',
    type         : 'float' as const,
    roller       : true,
    value        : 1.0,
    min          : -10.0,
    max          : 10.0,
    step         : 0.01,
    decimalPlaces: 3,
    unit         : 'none',
    onchange,
  },
  offset2: {
    panel        : 'Parameters',
    type         : 'float' as const,
    roller       : true,
    value        : 0,
    min          : -0.5,
    max          : 0.5,
    step         : 0.01,
    decimalPlaces: 3,
    unit         : 'none',
    onchange,
  },
  zoom: {
    panel        : 'Parameters',
    type         : 'float' as const,
    roller       : true,
    value        : 1.0,
    min          : 0.001,
    max          : 100.0,
    step         : 0.15,
    expRate      : 1.5,
    decimalPlaces: 2,
    unit         : 'none',
    onchange,
  },
  colorScale: {
    panel        : 'Parameters',
    type         : 'float' as const,
    roller       : true,
    value        : 1.0,
    min          : 0.001,
    max          : 100.0,
    step         : 0.1,
    expRate      : 1.5,
    decimalPlaces: 2,
    unit         : 'none',
    onchange,
  },
}
