
import { Modal, Box,  Typography } from "@mui/material";
import Button from "./Button";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "500", 
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
  borderRadius: 2,
};

function UserModel({open,modalRef}) {

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box ref={modalRef} sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            <p className=" text-center">Update your profile</p>
            <div className="main max-w-3xl flex flex-col gap-2">
                <div className="name w-[300px] leading-6">
                    <p className="text-[14px]">Update name</p>
                    <input className=" text-xs w-full outline-none border py-2 px-2 rounded-lg " type="text" placeholder="Update name" />
                </div>
                <div className="name w-[300px] leading-6">
                    <p className="text-[14px]">Update email</p>
                    <input className=" text-xs w-full outline-none border py-2 px-2 rounded-lg " type="email" placeholder="Update email" />
                </div>
                <div className="name w-[300px] leading-6">
                    <p className="text-[14px]">Update Role</p>
                    <select className=" w-full text-xs py-2 px-2 outline-none border rounded-lg text-[#acb2bd]" name="" id="">
                        <option value="admin">Admin</option>
                        <option value="super_admin">Super admin</option>
                        <option value="manager">Manager</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="item">
                    <Button className="py-1 text-base w-full flex justify-center" title="Update"/>
                </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default UserModel;
