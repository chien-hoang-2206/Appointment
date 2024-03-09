import React from 'react';
import FormCreateQuestion from '../../components/FormCreateQuestion/FormCreateQuestion';

const CreateQuestionPage = () => {
    return (
        <div className="p-10 w-full flex flex-col justify-center items-center">
            {/* <div className="flex text-blue font-bold text-xl">
                ĐẶT CÂU HỎI VỚI CHUYÊN GIA NGAY
            </div> */}
            <div className="f">
                <FormCreateQuestion />
            </div>
        </div>
    );
};

export default CreateQuestionPage;