import React from "react";

const AdminBox = () => {
    return (
        <div align='center' class='md:items-center col-span-2 rounded overflow-hidden bg-grey-400 mx-5 my-5 w-2/3 h-2/4 border-2'>
            <img class='mt-5' src='/src/assets/images/profiles/avatar.png' />
            <h4 class='mt-12 font-semibold'>Ilham Soejud A</h4>
            <h4 class='text-gray-400'>@alkahfiardy</h4>
            <div class='mt-5 flex flex-row items-center'>
                <img src='/src/assets/images/icons/share.png' />
                <img class='mx-3' src='/src/assets/images/icons/copy.png' />
                <img src='/src/assets/images/icons/delete.png' />
            </div>
        </div>
    )
};

export default AdminBox;