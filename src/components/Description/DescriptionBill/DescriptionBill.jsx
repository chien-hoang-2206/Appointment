import React from 'react';
import CustomTable from '../../CustomTable/CustomTable';
import { useNavigation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Tag } from 'antd';
import Constants from '../../../utils/constants';


function createData(id, name, doctor, speciality, date, status) {
    return {
        id,
        name,
        doctor,
        speciality,
        date,
        status,
    };
}

const rows = [
    createData(1, 'Hoàng Văn Nam', 'Âu Dương', 'Khoa Mắt', '22/02/2024', 10),
    createData(2, 'Donut', 'Âu Dương', 'Khoa Mắt', '22/02/2024', 20),
    createData(3, 'Eclair', 'Âu Dương', 'Khoa Mắt', '22/02/2024', 20),
    createData(4, 'Frozen yoghurt', 'Âu Dương', 'Khoa Mắt', '22/02/2024', 40),
    createData(5, 'Gingerbread', 'Âu Dương', 'Khoa Mắt', '22/02/2024', 40),
    createData(6, 'Honeycomb', 'Âu Dương', 'Khoa Mắt', '22/02/2024', 40),
    createData(7, 'Ice cream sandwich', 'Âu Dương', 'Khoa Mắt', '22/02/2024', 40),
];


const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Tên bênh nhân'
    },
    {
        id: 'doctor',
        align: 'left',
        disablePadding: false,
        label: 'Bác sĩ',

    },
    {
        id: 'speciality',
        align: 'left',
        label: 'Khoa khám',
        disablePadding: false,
    },
    {
        id: 'date',
        numeric: true,
        align: 'center',
        disablePadding: false,
        label: 'Ngày',
    },
    {
        id: 'status',
        align: 'center',
        minWidth: 100,
        maxWidth: 80,
        disablePadding: false,
        label: 'Trạng thái',
        component: (data, index) => {
            console.log("🚀 ~ data:", data)
            return (
                <Tag color={Constants.labelStatus.find(item => item?.value === data?.status)?.status}>{Constants.labelStatus.find(item => item?.value === data?.status)?.label}</Tag>
            )
        }
    },
];

const DescriptionBills = () => {
    const navigate = useNavigate()
    function handleClickRow(id) {
        navigate(`/appointments/${id}`)
    }
    return (
        <CustomTable headCells={headCells} rows={rows} handleClickRow={handleClickRow} />
    );
};

export default DescriptionBills;