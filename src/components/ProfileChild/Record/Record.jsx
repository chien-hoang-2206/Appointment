import Box from '../../Box/Box';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, InfoOutlined } from '@ant-design/icons';
import DescriptionProfile from '../../Description/DescriptionProfile/DescriptionProfile';
import { useState } from 'react';
import { forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import { Modal } from 'antd';
import DetailItem from '../../DetailItem/DetailItem';
import IC1 from '../../../assets/icon/ic-avatar.svg'
import IC2 from '../../../assets/icon/ic-born.svg'
import IC3 from '../../../assets/icon/ic-contact.svg'
import IC4 from '../../../assets/icon/ic-personnal.svg'
import IC5 from '../../../assets/icon/ic-location.svg'
import IC6 from '../../../assets/icon/ic-nation.svg'
import IC7 from '../../../assets/icon/cmnd.svg'
import IC8 from '../../../assets/icon/ic-email.svg'
import IC9 from '../../../assets/icon/ic-nationnality.svg'

import Constants from '../../../utils/constants';
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function createData(id, name, date, phone, gender, address, cmnd, email, job, nation, nationality) {
    return {
        id,
        name,
        date,
        phone,
        gender,
        address,
        cmnd,
        email,
        job,
        nation,
        nationality
    };
}

const data = [
    createData(1, 'Hoàng Văn Nam', '22/06/2001', '09201019111', '1', 'k44 nguyễn lương bằng, Phường Hòa Hiệp Bắc, Quận Liên Chiểu, Thành phố Đà Nẵng', '04410003343434', 'hoangvana@gmail.com', 'Kỹ sư công nghệ thông tin', 'Kinh', 'Việt Nam'),
    createData(2, 'Hoàng Văn Duy', '22/06/2001', '09201019111', '1', '10 Hà Văn Tính'),
    createData(3, 'Nguyễn Hồng Phú', '22/06/2001', '09201019111', '2', '10 Hà Văn Tính'),
];


const Record = props => {
    const {  onClickBox } = props
    const navigator = useNavigate()
    const [open, setOpen] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (item) => {
        setIsModalOpen(item);
    };

    const handleClickOpen = (id) => {
        setOpen(id);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDel = () => {
        console.log(open);
        /// xoas 
        setOpen(null);
    };
    const handleClickBox = (value) => {
        onClickBox(value)
    };

    return (
        <>
            <span className='font-bold text-xl'>
                Danh sách hồ sơ bệnh nhân
            </span>
            <div className="mt-6 flex flex-col gap-4 w-[900px]">
                {data?.map(item => {
                    return (
                        <div key={item.id}>
                            <Box
                                onClick={() => handleClickBox(11111)}
                                actions={[
                                    <button key="del"><DeleteOutlined style={{ color: '#ff3b30' }}
                                        onClick={() => {
                                            handleClickOpen(item?.id)
                                        }}
                                    // onClick={() => handleClickDel(item.id)}
                                    /> </button>,
                                    <button key="edit"><EditOutlined style={{ color: '#00b5f1' }} onClick={() => navigator(`/update-profile/${item.id}`)} /> </button>,
                                    <button key="info"><InfoOutlined onClick={() => showModal(item)} /> </button>,
                                ]}
                                description={<DescriptionProfile data={item} />}
                            />
                        </div>
                    );
                })}
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Xác nhận xoá hồ sơ ?"}</DialogTitle>
                    {/* <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent> */}
                    <DialogActions>
                        <Button onClick={handleClose}>Huỷ bỏ</Button>
                        <Button onClick={handleDel}>Đồng ý</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Xác nhận xoá hồ sơ ?"}</DialogTitle>
                    {/* <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent> */}
                    <DialogActions>
                        <Button onClick={handleClose}>Huỷ bỏ</Button>
                        <Button onClick={handleDel}>Đồng ý</Button>
                    </DialogActions>
                </Dialog>

                <Modal
                    title={<span className='text-xl font-bold text-blue'>Chi tiết hồ sơ</span>}
                    open={isModalOpen}
                    width={600}
                    onCancel={() => setIsModalOpen(null)}
                    footer=""
                >
                    <div className="flex flex-col gap-3">
                        <DetailItem icon={IC1} title='Họ và tên' content={isModalOpen?.name} />
                        <DetailItem icon={IC2} title='Ngày sinh' content={isModalOpen?.date} />
                        <DetailItem icon={IC3} title='Số điện thoại' content={isModalOpen?.phone} />
                        <DetailItem icon={IC4} title='Giới tính' content={Constants.optionSex?.find(item => item.value === parseInt(isModalOpen?.gender))?.label} />
                        <DetailItem icon={IC7} title='CMND' content={isModalOpen?.cmnd} />
                        <DetailItem icon={IC8} title='Email' content={isModalOpen?.email} />
                        <DetailItem icon={IC4} title='Nghề Nghiệp' content={isModalOpen?.job} />
                        <DetailItem icon={IC9} title='Quốc gia' content={isModalOpen?.nationality} />
                        <DetailItem icon={IC5} title='Địa chỉ' content={isModalOpen?.address} />
                        <DetailItem icon={IC6} title='Dân tộc' content={isModalOpen?.nation} />
                    </div>

                </Modal>
            </div >
        </>
    );
};

export default Record;