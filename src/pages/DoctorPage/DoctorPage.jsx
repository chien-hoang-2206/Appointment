import { Button, Pagination } from '@mui/material';
import { Avatar } from 'antd';
import { useState } from 'react';
import CardCustom from '../../components/Card/CardCustom';
import IcLocation from '../../assets/icon/ic-location.svg'
import ButonBooking from '../../components/Button/ButonBooking';
import ButonOutLine from '../../components/Button/ButonOutLine';
import InputSearch from '../../components/Input/InputSearch';

const DoctorPage = () => {
    const [inputSearch, setInputSearch] = useState();
    const [page, setPage] = useState(1);

    function handleChangeInput(e) {
        setInputSearch(e.target.value)
    }
    const handleChangePage = (event, page) => {
        setPage(page);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[1000px] py-10 flex flex-col justify-center items-center">
                <span className='text-3xl text-blue2 font-bold '>
                    Chuyên Gia - Bác Sĩ
                </span>

                <span className='text-base '>
                    Với những cơ sở Y Tế hàng đầu sẽ giúp trải nghiệm khám, chữa bệnh của bạn tốt hơn
                </span>
                {/* input search */}
                <div className="my-8 w-[600px]" >
                    {/* <div className="flex items-center gap-5 w-[600px] border border-gray-200 rounded-3xl py-2 px-5">
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
                            placeholder={'Tìm kiếm ...'}
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
                    </div> */}

                    <InputSearch
                        className='border border-1 border-blue w-full'
                        isHaveSelect
                        placeholderSelect='Chuyên khoa'
                    />
                </div>

                {/* select search */}

                <div className="flex flex-col gap-2  w-full">
                    {/* <div className="flex flex-col gap-2 w-full p-4">
                        <div className="flex flex-row gap-4 justify-start w-full">
                            <Avatar style={{ height: 150, width: 150 }} />
                            <div className="mt-2 w-[80%] flex flex-col">
                                <span className="text-xl ">BS.CKII PHẠM LÊ MỸ HẠNH</span>
                                <span className="text-sm text-gray">Trưởng khoa</span>
                                <span className="text-sm text-gray">Trung tâm Sơ sinh</span>
                                <span className="text-sm text-gray">TTƯT.PGS.TS Triệu Triều Dương là chuyên gia hàng đầu ngành phẫu thuật tiêu hóa: phẫu thuật thực quản, dạ dày, ruột, gan mật tụy, đại trực tràng, hậu môn, sàn chậu</span>
                            </div>
                        </div>
                        <div className='flex flex-row justify-end gap-4'>
                            <Button variant="outlined" >Đặt lịch hẹn</Button>
                            <Button variant="contained">Xem chi tiết</Button>
                        </div>
                    </div> */}

                    <CardCustom
                        title='BS.CKII PHẠM LÊ MỸ HẠNH'
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        content={
                            <div className="w-[80%] flex flex-col">
                                <span className="text-sm text-gray">Trưởng khoa</span>
                                <span className="text-sm text-gray">Trung tâm Sơ sinh</span>
                                <span className="text-sm text-gray">TTƯT.PGS.TS Triệu Triều Dương là chuyên gia hàng đầu ngành phẫu thuật tiêu hóa: phẫu thuật thực quản, dạ dày, ruột, gan mật tụy, đại trực tràng, hậu môn, sàn chậu</span>
                            </div>
                        }
                        footer={
                            <div className="flex mt-4 flex-row justify-center gap-2 items-center">
                                <ButonBooking />
                                <ButonOutLine> Xem chi tiết</ButonOutLine>
                            </div>
                        }
                    />
                    <CardCustom
                        title='BS.CKII PHẠM LÊ MỸ HẠNH'
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        content={
                            <div className="w-[80%] flex flex-col">
                                <span className="text-sm text-gray">Trưởng khoa</span>
                                <span className="text-sm text-gray">Trung tâm Sơ sinh</span>
                                <span className="text-sm text-gray">TTƯT.PGS.TS Triệu Triều Dương là chuyên gia hàng đầu ngành phẫu thuật tiêu hóa: phẫu thuật thực quản, dạ dày, ruột, gan mật tụy, đại trực tràng, hậu môn, sàn chậu</span>
                            </div>
                        }
                        footer={
                            <div className="flex mt-4 flex-row justify-center gap-2 items-center">
                                <ButonBooking />
                                <ButonOutLine> Xem chi tiết</ButonOutLine>
                            </div>
                        }
                    />
                    <CardCustom
                        title='BS.CKII PHẠM LÊ MỸ HẠNH'
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        content={
                            <div className="w-[80%] flex flex-col">
                                <span className="text-sm text-gray">Trưởng khoa</span>
                                <span className="text-sm text-gray">Trung tâm Sơ sinh</span>
                                <span className="text-sm text-gray">TTƯT.PGS.TS Triệu Triều Dương là chuyên gia hàng đầu ngành phẫu thuật tiêu hóa: phẫu thuật thực quản, dạ dày, ruột, gan mật tụy, đại trực tràng, hậu môn, sàn chậu</span>
                            </div>
                        }
                        footer={
                            <div className="flex mt-4 flex-row justify-center gap-2 items-center">
                                <ButonBooking />
                                <ButonOutLine> Xem chi tiết</ButonOutLine>
                            </div>
                        }
                    />

                    <div className='w-full mt-4 flex justify-end float-right'>
                        <Pagination count={10} component="div" onChange={(e, page) => handleChangePage(e, page)} showFirstButton showLastButton />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DoctorPage;