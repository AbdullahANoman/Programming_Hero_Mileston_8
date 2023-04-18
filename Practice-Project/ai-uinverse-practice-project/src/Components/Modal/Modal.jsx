import React from 'react';

const Modal = (props) => {
    const {id,description,image_link,features,integrations,pricing,input_output_examples} = props.modalPr;
    const featuresArray = Object.values(features || {})
    console.log(input_output_examples)
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
            <div className='flex gap-3'>
                <div className='bg-red-200 p-4 border border-black rounded '>
                    <p className='text-xl font-semibold'>{description}</p>
                    <div className='flex justify-between'>
                         <div>
                            <p className='text-2xl font-bold mt-3'>Features</p>
                            {
                                featuresArray && featuresArray.map((feature,index)=>(
                                    <li key={index}>{feature?feature?.feature_name:"No found"}</li>
                                ))
                            }
                         </div>
                         <div>
                         <p className='text-2xl font-bold mt-3'>Integrations</p>
                         {
                            integrations && integrations.map((item,index)=>(
                                <li key={index}>{item?item:'No found'}</li>
                            ))
                         }
                         </div>
                    </div>
                </div>
                <div className='border p-3 rounded'>
                    <img className='rounded' src={image_link&& image_link?image_link[0]:'Not Found'} alt="" />
                    {
                        input_output_examples && input_output_examples.map((item,index)=>(
                            <p key={index}>{item?item.input:"No data found"}</p>
                        ))
                    }
                </div>
            </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">Yay!</label>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Modal;