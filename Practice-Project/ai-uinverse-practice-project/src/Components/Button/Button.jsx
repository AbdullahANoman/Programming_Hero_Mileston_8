import React from 'react';

const Button = (children) => {
    return (
        <div className='text-center mt-4'>
            <button className='text-xl bg-red-400 py-4 px-3 border rounded text-white font-bold mb-5'>{children.children}</button>
        </div>
    );
};

export default Button;

