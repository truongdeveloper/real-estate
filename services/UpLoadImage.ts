"use client";
import axios from "axios";
import crypto from "crypto";
import { toast } from "react-toastify";

function getPublicIdFromUrl(url: string) {
  // Tìm vị trí của dấu "/" cuối cùng trong URL
  const slashIndex = url.lastIndexOf("/");

  // Tìm vị trí của dấu "." đầu tiên sau dấu "/"
  const dotIndex = url.indexOf(".", slashIndex);

  // Kiểm tra xem dấu "." và dấu "/" có tồn tại trong URL không
  if (dotIndex !== -1 && slashIndex !== -1) {
    // Trả về phần của URL từ dấu "/" đến dấu "." đầu tiên sau dấu "/"
    return url.substring(slashIndex + 1, dotIndex);
  }

  // Nếu không tìm thấy dấu "." hoặc dấu "/", trả về null
  return null;
}

export const uploadImageToCloudinary = async (imageFile: File) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "flbjrrmt"); // Thay thế bằng upload preset của bạn
    formData.append("folder", "dev");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dfkh87pvy/image/upload",
      formData
    );

    return response.data.secure_url; // Trả về đường dẫn URL an toàn của ảnh được tải lên Cloudinary
  } catch (error) {
    toast("Thêm ảnh thất bại");
    return Error;
  }
};

export const deleteImageFromCloudinary = async (url: string) => {
  const publicId = getPublicIdFromUrl(url);
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const cloudName = "dfkh87pvy";
    const apiKey = "352769527217187";
    const apiSecret = "m8srkVeFMXUTXbZ6he2vxLza_DM";

    const signature = crypto
      .createHash("sha1")
      .update(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`)
      .digest("hex");

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
      {
        public_id: publicId,
        timestamp: timestamp,
        api_key: apiKey,
        signature: signature,
      }
    );

    return response.data.result === "ok";
  } catch (error) {
    toast("Xóa ảnh thất bại");
    return false;
  }
};
