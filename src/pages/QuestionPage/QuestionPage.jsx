import { Avatar } from "antd";
import Box from "../../components/Box/Box";
import { useState } from "react";
import { useEffect } from "react";
import { Pagination } from "@mui/material";
import CardSpeciality from "../../components/Card/CardSpeciality";
import { useNavigate } from "react-router-dom";
const QuestionPage = () => {
    const [placeholder, setPlaceholder] = useState("Tìm kiếm với từ khoá ...");
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(2);
    const [inputSearch, setInputSearch] = useState();
    const [openID, setOpenId] = useState(1);

    function handleChangeOpenId(id) {
        if (openID === id) {
            setOpenId(null)
        } else {
            setOpenId(id)
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex => prevIndex + 1);
        }, 100); // Thay đổi tốc độ gõ ở đây (milliseconds)

        // Khi hiệu ứng đã hoàn thành, đặt index và placeholder lại
        if (index >= placeholder.length) {
            clearTimeout(timer);
            setIndex(0);
            setPlaceholder("Tìm kiếm với từ khoá ...");
        }

        return () => clearTimeout(timer);
    }, [index, placeholder]);

    useEffect(() => {
        if (!inputSearch || inputSearch === '') {
            setPlaceholder('Tìm kiếm với từ khoá ...')
        }
    }, [inputSearch])
    const handleInput = () => {
        setIndex(0);
        setPlaceholder("");
    };

    function handleChangeInput(e) {
        setInputSearch(e.target.value)
    }

    const handleChangePage = (event, page) => {
        setPage(page);
    };

    const navigate = useNavigate()
    const handleClickCard = (value) => {
        navigate(`/question?sp=${value}`)

    };


    return (
        <div className="p-10 w-full flex flex-col justify-center items-center">
            <div className="flex text-3xl text-blue">
                CHUYÊN MỤC TƯ VẤN
            </div>
            <div className="h-[2px] mt-2 w-44 bg-[#111]" />


            {/* input search */}
            <div className="mt-8 w-[600px]" >
                <div className="flex items-center gap-5 w-[600px] border border-gray-200 rounded-3xl py-3 px-5">
                    <span className="flex-shrink-0 text-gray-500">
                        <svg
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
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        onChange={(e) => handleChangeInput(e)}
                        value={inputSearch}
                        className="w-full outline-none bg-transparent"
                        placeholder={placeholder.slice(0, index)}
                        onInput={handleInput}
                    />
                    <button onClick={() => setInputSearch('')} className=" border-none flex-shrink-0 text-slate-500">
                        <svg
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex flex-col p-10 w-[90%] justify-center ">
                <div className="flex flex-wrap w-full">
                    <CardSpeciality
                        onClick={() => handleClickCard(1)}
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/khoa-da-lieu.png'} title='Da Liễu' />
                    <CardSpeciality
                        onClick={() => handleClickCard(2)}
                        src={'https://tamanhhospital.vn/wp-content/uploads/2020/11/icon-khop.png'}
                        title='Xương khớp'
                    />
                    <CardSpeciality
                        onClick={() => handleClickCard(3)}
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/tai-mui-hong.png'}
                        title='Tai mũi Họng'
                    />
                    <CardSpeciality
                        onClick={() => handleClickCard(4)}
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/tai-mui-hong.png'}
                        title='Tai mũi Họng'
                    />
                    <CardSpeciality
                        onClick={() => handleClickCard(5)}
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/tai-mui-hong.png'}
                        title='Tai mũi Họng'
                    />
                    <CardSpeciality
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/tai-mui-hong.png'}
                        onClick={() => handleClickCard(6)}
                        title='Tai mũi Họng'
                    />
                    <CardSpeciality
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/khoa-da-lieu.png'} title='Da Liễu' />
                    <CardSpeciality
                        src={'https://tamanhhospital.vn/wp-content/uploads/2020/11/icon-khop.png'}
                        title='Xương khớp'
                    />
                    <CardSpeciality
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/tai-mui-hong.png'}
                        title='Tai mũi Họng'
                    />
                    <CardSpeciality
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/tai-mui-hong.png'}
                        title='Tai mũi Họng'
                    />
                    <CardSpeciality
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/tai-mui-hong.png'}
                        title='Tai mũi Họng'
                    />
                    <CardSpeciality
                        src={'https://tamanhhospital.vn/wp-content/uploads/2023/04/tai-mui-hong.png'}
                        title='Tai mũi Họng'
                    />
                </div>
            </div>
            {/* Hỏi đáp */}

            <div className="w-[1000px] py-10 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-4">
                    <div>
                        <Box
                            isCanHover={false}
                            title={'Khi nào trẻ sơ sinh đi ngoài thành khuôn? Giải đáp chi tiết'}
                            description={'Theo tôi được biết, màu sắc và kết cấu phân của trẻ sơ sinh khác với phân của người lớn. Hơn nữa, chúng còn thay đổi liên tục theo sự phát triển của trẻ, sức khỏe và chế độ dinh dưỡng hàng ngày trong năm đầu đời. Vậy khi nào trẻ sơ sinh đi ngoài thành khuôn? Mong bác sĩ giải đáp.'}
                            actions={[
                                <button className="border-none" key={'show'} onClick={() => handleChangeOpenId(1)} type="button" >Xem câu trả lời</button>
                            ]}
                        />

                        <div className={`p-6 bg-[#F0F2F1] z-10 relative w-full rounded-b-md transition-all duration-300 ${openID === 1 ? 'top-[-10px]' : 'top-[100px]'} ${openID === 1 ? 'opacity-100' : 'opacity-0'}  ${openID === 1 ? '' : 'hidden'}`}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-4">
                                    <Avatar style={{ height: 100, width: 100 }} src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                                    <div className="mt-2 flex flex-col gap-1">
                                        <span className="text-xl ">BS.CKII PHẠM LÊ MỸ HẠNH</span>
                                        <span className="text-sm text-gray">Trưởng khoa</span>
                                        <span className="text-sm text-gray">Trung tâm Sơ sinh</span>
                                        <span className="text-sm text-gray">Bệnh viện Đa khoa Tâm Anh TP.HCM</span>
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-row gap-4">
                                    <span className="text-sm text-justify">
                                        Khi nào trẻ sơ sinh đi ngoài thành khuôn? Ở những ngày đầu đời, trẻ sơ sinh đi ngoài phân su - có màu xanh đen, không mùi, đặc và dính. Sau đó, phân trẻ trở nên lỏng hơn, màu vàng, có hoặc không có hạt. Tại sao phân của trẻ sơ sinh không thành khuôn? Thực tế, kết cấu và màu phân của trẻ sơ sinh không chỉ liên quan đến tình trạng sức khỏe của trẻ mà nó còn bị ảnh hưởng nhiều bởi thức ăn mà trẻ tiêu thụ hàng ngày. Ở giai đoạn sơ sinh, nguồn...
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Box
                        title={'Khi nào trẻ sơ sinh đi ngoài thành khuôn? Giải đáp chi tiết'}
                        description={'Theo tôi được biết, màu sắc và kết cấu phân của trẻ sơ sinh khác với phân của người lớn. Hơn nữa, chúng còn thay đổi liên tục theo sự phát triển của trẻ, sức khỏe và chế độ dinh dưỡng hàng ngày trong năm đầu đời. Vậy khi nào trẻ sơ sinh đi ngoài thành khuôn? Mong bác sĩ giải đáp.'}
                        actions={[
                            <button key={'show'} type="button" >Xem câu trả lời</button>
                        ]}
                    />

                    <Box
                        title={'Khi nào trẻ sơ sinh đi ngoài thành khuôn? Giải đáp chi tiết'}
                        description={'Theo tôi được biết, màu sắc và kết cấu phân của trẻ sơ sinh khác với phân của người lớn. Hơn nữa, chúng còn thay đổi liên tục theo sự phát triển của trẻ, sức khỏe và chế độ dinh dưỡng hàng ngày trong năm đầu đời. Vậy khi nào trẻ sơ sinh đi ngoài thành khuôn? Mong bác sĩ giải đáp.'}
                        actions={[
                            <button key={'show'} type="button" >Xem câu trả lời</button>
                        ]}
                    />

                </div>
            </div>

            {/* Paginaiton */}
            {/* <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
            <Pagination count={10} component="div" onChange={(e, page) => handleChangePage(e, page)} showFirstButton showLastButton />
        </div >
    );
};

export default QuestionPage;