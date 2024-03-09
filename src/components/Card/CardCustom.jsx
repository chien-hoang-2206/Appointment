import { Avatar } from 'antd';
const CardCustom = (props) => {
    return (
        <>
            <div className="flex flex-row  p-6  bg-[#fff] rounded-2xl shadow-md">
                <div className="relative flex-shrink-0 mb-5 h-[100px]">
                    <Avatar
                        src={props?.src}
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <h3 className="text-left text-[#111] text-2xl font-bold">
                        {props.title ?? 'title'}
                    </h3>
                    <div className="text-left mt-2 text-gray  ">
                        {props.content}
                    </div>
                    <div className="text-center text-[#111] flex justify-end items-end">
                        {props.footer}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardCustom;