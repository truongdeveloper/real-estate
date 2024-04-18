interface DataType {
   id: number;
   id_name: string;
   title: string;
   md_pt?:boolean;
   faq: {
      id: number;
      question: string;
      answer: string;
   }[];
}

const inner_faq_data:DataType[] = [
   {
      id: 1,
      id_name: "Selling",
      title: "Bán",
      md_pt:true,
      faq: [
         {
            id: 1,
            question: "Bản dùng thử miễn phí hoạt động như thế nào?",
            answer: `Trang web cung cấp một nền tảng cho người dùng để đăng thông tin về các bất động sản mà họ muốn bán. Điều này có thể bao gồm thông tin như loại bất động sản, vị trí, giá cả, và mô tả chi tiết.
            Các công cụ tìm kiếm và lọc được cung cấp để người dùng có thể dễ dàng tìm kiếm các bất động sản đang được bán dựa trên các yếu tố như vị trí, loại bất động sản, diện tích, giá cả, và các tiện ích khác.`,
         },
         // {
         //    id: 2,
         //    question: "How do you weigh different criteria in your process?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
         // {
         //    id: 3,
         //    question: "Quy trình bán tài sản như thế nào?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
         // {
         //    id: 4,
         //    question: "Hoàn tiền",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
      ]
   },
   {
      id: 2,
      id_name: "Renting",
      title: "Cho thuê",
      faq: [
         {
            id: 5,
            question: "Can a home depreciate in value?",
            answer: `Người dùng có thể đăng thông tin về các bất động sản mà họ muốn cho thuê, bao gồm thông tin về loại bất động sản, vị trí, giá thuê, và các điều kiện khác.
            Trang web cung cấp các công cụ tìm kiếm và lọc để người dùng có thể dễ dàng tìm kiếm các bất động sản cho thuê phù hợp với nhu cầu của họ, bao gồm cả việc lọc theo loại bất động sản, giá thuê, diện tích, và các tiện ích khác.`,
         },
         // {
         //    id: 6,
         //    question: "Is an older home as good a value as a new home?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
         // {
         //    id: 7,
         //    question: "What is a broker?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
         // {
         //    id: 8,
         //    question: "Can I pay my own taxes and insurance?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
      ]
   },
   {
      id: 3,
      id_name: "Buying",
      title: "Mua",
      faq: [
         {
            id: 9,
            question: "How does the free trial work?",
            answer: `Người dùng có thể sử dụng trang web để tìm kiếm và duyệt qua danh sách các bất động sản đang được bán. Họ có thể sử dụng các bộ lọc và công cụ tìm kiếm để hạn chế kết quả tìm kiếm theo các yếu tố như vị trí, loại bất động sản, diện tích, giá cả, và các tiện ích khác.
            Khi họ quan tâm đến một bất động sản cụ thể, họ có thể xem thông tin chi tiết, hình ảnh, và liên hệ với người bán để biết thêm thông tin hoặc sắp xếp cuộc hẹn xem nhà.`,
         },
         // {
         //    id: 10,
         //    question: "How do you weigh different criteria in your process?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
         // {
         //    id: 11,
         //    question: "Refund & Frauds",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
      ]
   },
   {
      id: 4,
      id_name: "Payments",
      title: "Thanh toán",
      faq: [
         {
            id: 12,
            question: "Which payment method is supported?",
            answer: `Trang web cung cấp các phương thức thanh toán an toàn và thuận tiện cho các giao dịch liên quan đến bất động sản. Điều này có thể bao gồm thanh toán trực tuyến thông qua các cổng thanh toán an toàn và đáng tin cậy, hoặc các phương thức thanh toán khác như chuyển khoản ngân hàng.
            Các giao dịch thanh toán được xác nhận và quản lý một cách an toàn để đảm bảo tính chính xác và đảm bảo cho cả người mua và người bán.`,
         },
         // {
         //    id: 13,
         //    question: "Is my card is secure here?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
         // {
         //    id: 14,
         //    question: "Can I provide cheque to my client for payment?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
      ]
   },
   {
      id: 5,
      id_name: "Terms",
      title: "Điều khoản và điều kiện",
      faq: [
         {
            id: 15,
            question: "How does the free trial work?",
            answer: `Trang web cung cấp một bản dịch rõ ràng và chi tiết về các điều khoản và điều kiện sử dụng. Điều này bao gồm các quy định về việc sử dụng trang web, quyền và trách nhiệm của người dùng, cũng như các điều khoản về bảo mật thông tin cá nhân và quản lý dữ liệu.
            Người dùng được yêu cầu đọc và đồng ý với các điều khoản và điều kiện này trước khi họ có thể sử dụng các dịch vụ được cung cấp trên trang web.`,
         },
         // {
         //    id: 16,
         //    question: "How do you weigh different criteria in your process?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
      ]
   },
   {
      id: 6,
      id_name: "Account",
      title: "Tài khoản",
      faq: [
         {
            id: 17,
            question: "Can a home depreciate in value?",
            answer: `Người dùng có thể tạo tài khoản cá nhân trên trang web để quản lý thông tin cá nhân của họ và theo dõi các giao dịch liên quan đến bất động sản.
            Tài khoản cá nhân cung cấp cho người dùng khả năng lưu trữ và quản lý thông tin như danh sách yêu thích, lịch sử tìm kiếm, và thông tin liên hệ với người bán hoặc cho thuê.`,
         },
         // {
         //    id: 18,
         //    question: "Is an older home as good a value as a new home?",
         //    answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         // },
      ]
   },
]

export default inner_faq_data;