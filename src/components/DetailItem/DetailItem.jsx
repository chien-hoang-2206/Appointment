
const DetailItem = (props) => {
    const { icon, styleTitle, content = '', title = 'title ' } = props
    return (
        <div className="inline-flex items-center gap-2 justify-start font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg min-h-[26px]">
            <span>
                {icon && <img className='w-4' src={icon} /> }
                
                {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg> */}
            </span>
            <span className={`w-[150px] ${styleTitle}`}>{title}:</span>
            <span className="max-w-[75%] text-ellipsis text-gray-dark font-bold">{content ? content : ''}</span>
        </div>
    );
};

export default DetailItem;