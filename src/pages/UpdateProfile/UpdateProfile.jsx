import { useParams } from "react-router-dom";
import Box from "../../components/Box/Box";
import UpdateProfile from "../../components/Description/UpdateProfile/DescriptionBill";
const UpdateProfilePage = () => {
    const id = useParams()
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[1000px] py-10 flex flex-col justify-center items-center">
                <Box
                    title={<span className="text-2xl">Cập nhật thông tin bệnh nhân</span>}
                    alignTitle='center'
                    description={<UpdateProfile/>}
                />
            </div>
        </div>
    );
};

export default UpdateProfilePage;