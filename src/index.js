import React from 'react';

import defaultConfig from './config.js';

export default (() => {
    let config = defaultConfig;

    return Object.assign((DxComponent) => React.forwardRef((props, ref) => {
        const {
            _header,
            _style = {},
            _className = '',
    
            ...componentProps
        } = props;

        return (
            <div 
                style={_style}
                className={_className} 
                >
                {_header && (
                    <div className='header-small'> {_header} </div>
                )}
                <DxComponent
                    ref={ref}
                    {...Object.assign({}, config[DxComponent.name], componentProps)} 
                    />
            </div>
            )
        }), 
        { config: (c) => { config = c } }
    );
})();