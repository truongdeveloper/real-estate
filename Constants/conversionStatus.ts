function conversionStatusPost(status: number) {
  switch (status) {
    case 0:
      return "Ẩn";
    case 1:
      return "Chờ duyệt";
    case 2:
      return "Đã duyệt";
    case 3:
      return "Từ chối";
    default:
      return "Đang chờ duyệt";
  }
}

export { conversionStatusPost };
