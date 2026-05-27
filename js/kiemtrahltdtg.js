// Ngân hàng dữ liệu gồm 20 câu hỏi chia đều 4 mức độ
const danhSachCauHoi = [
  // --- MỨC ĐỘ: NHẬN BIẾT ---
{
    cau: 1,
    question: "Một hình lăng trụ đứng tam giác có bao nhiêu mặt, bao nhiêu cạnh và bao nhiêu đỉnh?",
    options: [
      "5 mặt, 9 cạnh, 6 đỉnh",
      "5 mặt, 6 cạnh, 9 đỉnh",
      "6 mặt, 9 cạnh, 6 đỉnh",
      "4 mặt, 6 cạnh, 4 đỉnh"
    ],
    correct: 0,
    hint: "Hình khối này có 2 mặt đáy là hình tam giác nằm song song và các mặt bên bọc xung quanh.",
    explanation: "<strong>Lời giải chi tiết:</strong> Hình lăng trụ đứng tam giác có cấu trúc gồm: 2 mặt đáy tam giác, 3 mặt bên hình chữ nhật (tổng bằng 5 mặt); 3 cạnh đáy dưới + 3 cạnh đáy trên + 3 cạnh bên đứng (tổng bằng 9 cạnh); 3 đỉnh đáy dưới + 3 đỉnh đáy trên (tổng bằng 6 đỉnh)."
  },
  {
    cau: 2,
    question: "Các mặt bên của một hình lăng trụ đứng tam giác luôn luôn là hình gì?",
    options: [
      "Hình tam giác",
      "Hình chữ nhật",
      "Hình thang cân",
      "Hình bình hành"
    ],
    correct: 1,
    hint: "Vì đây là lăng trụ 'đứng' nên các cạnh bên vuông góc với hai mặt phẳng đáy.",
    explanation: "<strong>Lời giải chi tiết:</strong> Theo định nghĩa, các cạnh bên của lăng trụ đứng vuông góc với đáy, kéo theo tất cả các mặt bên bọc xung quanh của hình lăng trụ đứng tam giác đều là các hình chữ nhật."
  },
  {
    cau: 3,
    question: "Cho một hình lăng trụ đứng tam giác có độ dài 3 cạnh đáy lần lượt là a, b, c và chiều cao là h. Công thức tính diện tích xung quanh (Sxq) của hình này là:",
    options: [
      "Sxq = (a + b + c) x h",
      "Sxq = 1/2 x (a + b + c) x h",
      "Sxq = (a x b x c) x h",
      "Sxq = (a + b + c) + h"
    ],
    correct: 0,
    hint: "Diện tích xung quanh bằng chu vi của một mặt đáy nhân trực tiếp với chiều cao khối lăng trụ.",
    explanation: "<strong>Lời giải chi tiết:</strong> Diện tích xung quanh bằng tổng diện tích 3 mặt bên hình chữ nhật: Sxq = (a + b + c) x h (Chu vi đáy nhân chiều cao)."
  },
  {
    cau: 4,
    question: "Công thức nào sau đây dùng để xác định thể tích V của một khối lăng trụ đứng tam giác?",
    options: [
      "V = Sđáy x h",
      "V = 1/3 x Sđáy x h",
      "V = 2 x Sđáy x h",
      "V = Chu vi đáy x h"
    ],
    correct: 0,
    hint: "Thể tích khối lăng trụ đứng bằng diện tích một mặt đáy nhân ghép thẳng với độ dài chiều cao.",
    explanation: "<strong>Lời giải chi tiết:</strong> Thể tích của hình lăng trụ đứng nói chung và lăng trụ đứng tam giác nói riêng luôn được xác định theo công thức: V = Sđáy x h, trong đó Sđáy là diện tích tam giác đáy."
  },
  {
    cau: 5,
    question: "Trong hình lăng trụ đứng tam giác, hai mặt đáy có vị trí quan hệ không gian như thế nào với nhau?",
    options: [
      "Cắt nhau và vuông góc",
      "Trùng khít lên nhau",
      "Song song với nhau",
      "Chéo nhau trong không gian"
    ],
    correct: 2,
    hint: "Hãy nhìn hai mặt đáy nằm ở đỉnh trên và phần sàn nâng đỡ khối hộp xem chúng có bao giờ chạm nhau không.",
    explanation: "<strong>Lời giải chi tiết:</strong> Hai mặt đáy của một hình lăng trụ đứng luôn luôn là hai hình tam giác bằng nhau và nằm trên hai mặt phẳng song song với nhau."
  },
  // --- MỨC ĐỘ: THÔNG HIỂU ---
  {
    cau: 6,
    question: "Tính diện tích xung quanh của một hình lăng trụ đứng tam giác có chiều cao 7 cm và các cạnh đáy lần lượt dài 3 cm, 4 cm, 5 cm.",
    options: [
      "60 cm²",
      "84 cm²",
      "42 cm²",
      "35 cm²"
    ],
    correct: 1,
    hint: "Tính chu vi tam giác đáy: 3 + 4 + 5 = 12 cm, sau đó đem nhân với chiều cao.",
    explanation: "<strong>Lời giải chi tiết:</strong> Chu vi đáy là: C = 3 + 4 + 5 = 12 cm. Diện tích xung quanh bằng: Sxq = C x h = 12 x 7 = 84 cm²."
  },
  {
    cau: 7,
    question: "Một khối lăng trụ đứng tam giác có chiều cao h = 10 cm. Mặt đáy là một tam giác vuông có hai cạnh góc vuông lần lượt là 6 cm và 8 cm. Thể tích khối lăng trụ đó là bao nhiêu?",
    options: [
      "480 cm³",
      "240 cm³",
      "140 cm³",
      "120 cm³"
    ],
    correct: 1,
    hint: "Tính diện tích đáy tam giác vuông: (6 x 8) / 2 = 24 cm², rồi nhân tiếp với chiều cao 10.",
    explanation: "<strong>Lời giải chi tiết:</strong> Diện tích đáy tam giác vuông là: Sđáy = 1/2 x 6 x 8 = 24 cm². Thể tích khối lăng trụ bằng: V = Sđáy x h = 24 x 10 = 240 cm³."
  },
  {
    cau: 8,
    question: "Hình lăng trụ đứng tam giác có diện tích xung quanh là 150 cm², chiều cao h = 6 cm. Chu vi đáy của lăng trụ này bằng bao nhiêu?",
    options: [
      "25 cm",
      "30 cm",
      "900 cm",
      "15 cm"
    ],
    correct: 0,
    hint: "Từ công thức Sxq = Chu vi đáy x h, muốn tìm chu vi đáy ta lấy diện tích xung quanh chia cho chiều cao.",
    explanation: "<strong>Lời giải chi tiết:</strong> Chu vi đáy của khối lăng trụ đứng tam giác được tính bằng: C = Sxq / h = 150 / 6 = 25 cm."
  },
  {
    cau: 9,
    question: "Tính diện tích toàn phần của lăng trụ đứng tam giác có chiều cao 5 dm, đáy là tam giác vuông có diện tích đáy bằng 6 dm² và chu vi đáy bằng 12 dm.",
    options: [
      "66 dm²",
      "72 dm²",
      "60 dm²",
      "84 dm²"
    ],
    correct: 1,
    hint: "Diện tích toàn phần (Stp) bằng Diện tích xung quanh (12 x 5 = 60 dm²) cộng thêm diện tích của CẢ HAI mặt đáy (2 x 6).",
    explanation: "<strong>Lời giải chi tiết:</strong> <br>- Diện tích xung quanh là: Sxq = 12 x 5 = 60 dm².<br>- Diện tích 2 mặt đáy là: 2 x Sđáy = 2 x 6 = 12 dm².<br>- Diện tích toàn phần là: Stp = Sxq + 2 x Sđáy = 60 + 12 = 72 dm²."
  },
  {
    cau: 10,
    question: "Một khối lăng trụ đứng tam giác có thể tích bằng 180 cm³, biết chiều cao của lăng trụ đứng này là 15 cm. Diện tích mặt đáy phẳng của khối lăng trụ bằng bao nhiêu?",
    options: [
      "12 cm²",
      "24 cm²",
      "36 cm²",
      "10 cm²"
    ],
    correct: 0,
    hint: "Diện tích mặt đáy bằng thể tích tổng đem chia trực tiếp cho chiều cao trục dọc: 180 / 15.",
    explanation: "<strong>Lời giải chi tiết:</strong> Từ biểu thức tính thể tích V = Sđáy x h, ta suy ngược lại công thức tính diện tích mặt đáy: Sđáy = V / h = 180 / 15 = 12 cm²."
  },
  // --- MỨC ĐỘ: VẬN DỤNG ---
  {
    cau: 11,
    question: "Một chiếc lịch để bàn có dạng hình lăng trụ đứng tam giác cân. Kích thước hai mặt bên đứng bằng giấy cứng bọc quanh là rộng 15 cm, dài 20 cm. Mặt đáy tam giác cân phía dưới làm chân đỡ có cạnh đáy rộng 10 cm. Tính tổng diện tích giấy bìa cần dùng để làm chiếc lịch này (Không tính hai mép gấp và mặt đáy giấy tiếp xúc bàn).",
    options: [
      "600 cm²",
      "700 cm²",
      "800 cm²",
      "400 cm²"
    ],
    correct: 0,
    hint: "Phần giấy bìa làm bìa lịch chỉ bọc xung quanh 2 mặt bên nghiêng chữ nhật lớn, mỗi mặt có kích thước 15 x 20 cm.",
    explanation: "<strong>Lời giải chi tiết:</strong> Chiếc lịch gồm 2 mặt bên chữ nhật chứa thông tin ngày tháng có diện tích bằng nhau. Diện tích giấy cần tính là: S = 2 x (15 x 20) = 600 cm²."
  },
  {
    cau: 12,
    question: "Một bồn hoa có dạng hình lăng trụ đứng tam giác đáy vuông. Hai cạnh góc vuông đáy đo được lần lượt là 1.5 m và 2 m. Chiều cao thành bồn hoa là 0.5 m. Người ta đổ đất đầy bồn hoa, biết giá mỗi mét khối đất là 240,000 đồng. Tính số tiền cần chi trả để mua đất.",
    options: [
      "360,000 đồng",
      "180,000 đồng",
      "720,000 đồng",
      "540,000 đồng"
    ],
    correct: 1,
    hint: "Tính diện tích đáy bồn (1.5 x 2 / 2 = 1.5 m²), tính thể tích đất (1.5 x 0.5 = 0.75 m³) rồi nhân với đơn giá tiền đất.",
    explanation: "<strong>Lời giải chi tiết:</strong> <br>- Diện tích tam giác vuông đáy: Sđáy = 1/2 x 1.5 x 2 = 1.5 m².<br>- Thể tích bồn hoa: V = Sđáy x h = 1.5 x 0.5 = 0.75 m³.<br>- Số tiền mua đất là: 0.75 x 240,000 = 180,000 đồng."
  },
  {
    cau: 13,
    question: "Nếu một hình lăng trụ đứng tam giác được người ta tăng đồng loạt chiều cao lên 3 lần, đồng thời thu hẹp diện tích mặt đáy tam giác xuống 2 lần thì thể tích tổng của khối mới sẽ thay đổi như thế nào?",
    options: [
      "Tăng lên 1.5 lần",
      "Giảm đi 1.5 lần",
      "Tăng lên 6 lần",
      "Giữ nguyên không đổi"
    ],
    correct: 0,
    hint: "Lập tỉ lệ thể tích: V_mới = (Sđáy / 2) x (3 x h) = 1.5 x (Sđáy x h).",
    explanation: "<strong>Lời giải chi tiết:</strong> Ta có V_đầu = Sđáy x h. Khi thay đổi thông số kích thước: V_mới = (Sđáy / 2) x (3 x h) = 1.5 x V_đầu. Vậy thể tích tăng lên 1.5 lần."
  },
  {
    cau: 14,
    question: "Một chiếc lều cắm trại chữ A có dạng lăng trụ đứng đáy tam giác đều cạnh 2 m, chiều cao của tam giác đáy là 1.7 m. Chiều dài thân lều nối dài ra sau là 3 m. Tính tổng diện tích vải bạt dùng để làm 2 mặt bên mái lều và 2 mặt đáy che trước sau (Bỏ qua diện tích bạt lót sàn).",
    options: [
      "15.4 m²",
      "12.0 m²",
      "18.8 m²",
      "21.2 m²"
    ],
    correct: 0,
    hint: "Diện tích bạt gồm: 2 mặt mái chữ nhật (2 x 3 x 2 = 12 m²) cộng 2 mặt đáy tam giác trước sau (2 x 1/2 x 2 x 1.7 = 3.4 m²).",
    explanation: "<strong>Lời giải chi tiết:</strong> <br>- Diện tích 2 mặt mái bên lều là: Smái = 2 x (2 x 3) = 12 m².<br>- Diện tích 2 mặt tam giác chắn trước sau là: Sđáy = 2 x (1/2 x 2 x 1.7) = 3.4 m².<br>- Tổng diện tích vải bạt: S = 12 + 3.4 = 15.4 m²."
  },
  {
    cau: 15,
    question: "Một hình lăng trụ đứng tam giác vuông có chiều cao bằng 8 cm. Biết tam giác đáy có một cạnh góc vuông dài 3 cm và cạnh huyền dài 5 cm. Tính diện tích toàn phần của khối lăng trụ.",
    options: [
      "102 cm²",
      "108 cm²",
      "120 cm²",
      "96 cm²"
    ],
    correct: 1,
    hint: "Sử dụng Pythagore tìm cạnh góc vuông còn lại của đáy: √(5² - 3²) = 4 cm. Sau đó tính Sxq, Sđáy rồi tính Stp.",
    explanation: "<strong>Lời giải chi tiết:</strong> <br>- Độ dài cạnh góc vuông đáy còn lại là: √(5² - 3²) = 4 cm.<br>- Chu vi đáy: C = 3 + 4 + 5 = 12 cm => Sxq = 12 x 8 = 96 cm².<br>- Diện tích một đáy: Sđáy = 1/2 x 3 x 4 = 6 cm².<br>- Diện tích toàn phần: Stp = Sxq + 2 x Sđáy = 96 + 2 x 6 = 108 cm²."
  },
  // --- MỨC ĐỘ: VẬN DỤNG CAO ---
  {
    cau: 16,
    question: "Một máng xối dẫn nước bằng tôn có dạng hình lăng trụ đứng, đáy là tam giác vuông cân tại đỉnh đáy ngửa xuống đất có cạnh huyền rộng ngang mặt máng là 60 cm. Chiều dài máng là 4 m. Khi trời mưa lớn, mực nước trong máng dâng lên cao bằng 2/3 chiều sâu tối đa của máng. Tính thể tích nước đang chảy trong máng.",
    options: [
      "240 lít",
      "160 lít",
      "360 lít",
      "540 lít"
    ],
    correct: 1,
    hint: "Đổi đơn vị sang dm. Tam giác vuông cân cạnh huyền 6 dm thì chiều cao đỉnh máng bằng 3 dm. Áp dụng tỉ lệ đồng dạng diện tích bằng bình phương tỉ lệ chiều cao (2/3)².",
    explanation: "<strong>Lời giải chi tiết:</strong> Đổi: 60 cm = 6 dm, 4 m = 40 dm. Tam giác vuông cân cạnh huyền bằng 6 dm thì có chiều cao tương ứng hạ từ đỉnh vuông là hmáng = 6 / 2 = 3 dm.<br>- Diện tích tam giác đáy máng tối đa: Smax = 1/2 x 6 x 3 = 9 dm².<br>- Do mực nước cao bằng 2/3 chiều sâu nên mặt tam giác nước đồng dạng với đáy máng theo tỉ lệ k = 2/3.<br>- Diện tích mặt nước đáy thực tế: Snước = (2/3)² x Smax = 4/9 x 9 = 4 dm².<br>- Thể tích nước: V = Snước x Dài = 4 x 40 = 160 dm³ = 160 lít."
  },
  {
    cau: 17,
    question: "Một khối bê tông hình lăng trụ đứng đáy tam giác đều có kích thước cạnh đáy 40 cm, chiều cao khối là 2 m. Người ta dùng máy khoan khoét xuyên dọc lõi trung tâm một cái lỗ hình trụ tròn suốt chiều dọc khối bê tông có bán kính đáy trụ bằng 10 cm để luồn đường ống. Tính thể tích khối bê tông còn lại sau khi khoét (Lấy √3 ≈ 1.73 và π ≈ 3.14).",
    options: [
      "75.6 dm³",
      "138.4 dm³",
      "62.8 dm³",
      "211.2 dm³"
    ],
    correct: 0,
    hint: "Đổi hết sang dm. Tính thể tích khối lăng trụ ban đầu rồi trừ đi thể tích khối trụ tròn rỗng lõi sinh ra.",
    explanation: "<strong>Lời giải chi tiết:</strong> Đổi đơn vị: Cạnh đáy = 4 dm, Chiều cao = 20 dm, Bán kính lỗ = 1 dm.<br>- Diện tích đáy tam giác đều ban đầu: Sđáy = (4² x √3) / 4 = 4√3 ≈ 4 x 1.73 = 6.92 dm².<br>- Thể tích lăng trụ gốc: Vgốc = 6.92 x 20 = 138.4 dm³.<br>- Thể tích lõi trụ tròn rỗng bị khoét mất: Vtrụ = π x r² x h = 3.14 x 1² x 20 = 62.8 dm³.<br>- Thể tích bê tông còn lại: V = 138.4 - 62.8 = 75.6 dm³."
  },
  {
    cau: 18,
    question: "Người ta muốn uốn một tấm tôn phẳng hình chữ nhật kích thước chiều rộng cố định 60 cm thành vỏ bọc xung quanh của một hình lăng trụ đứng tam giác đều (Hai cạnh mép rộng tấm tôn ráp khít tạo thành đường cao đứng). Tìm độ dài chiều cao lăng trụ để thể tích không gian bên trong lăng trụ đạt giá trị lớn nhất.",
    options: [
      "Chiều cao bằng 20 cm",
      "Chiều cao bằng 30 cm",
      "Chiều cao đạt max khi đáy vô cùng nhỏ",
      "Không thể xác định được"
    ],
    correct: 0,
    hint: "Gọi x là chiều cao đứng (cạnh mép tôn ban đầu). Chu vi tam giác đáy lăng trụ đều sẽ bằng (60 - x) cm. Lập biểu thức tính thể tích rồi tìm giá trị lớn nhất.",
    explanation: "<strong>Lời giải chi tiết:</strong> Gọi chiều cao của lăng trụ đứng là x cm (0 < x < 60).<br>- Chu vi của tam giác đáy đều khi uốn là: 60 - x cm. Suy ra độ dài mỗi cạnh đáy tam giác đều bằng: a = (60 - x) / 3.<br>- Diện tích đáy lăng trụ đều: Sđáy = (a² x √3) / 4 = (√3 / 36) x (60-x)².<br>- Hàm thể tích lăng trụ: V(x) = Sđáy x x = (√3 / 36) x x(60-x)².<br>- Áp dụng BĐT Cô-si cho 3 số: 2x, 60-x, 60-x. Thể tích Max khi và chỉ khi: 2x = 60 - x <=> 3x = 60 <=> x = 20 cm."
  },
  {
    cau: 19,
    question: "Một thanh kim loại đặc hình lăng trụ đứng có đáy là tam giác vuông cân cạnh góc vuông dài 6 cm, chiều dài thanh là 15 cm. Người ta đem nung chảy thanh sắt này để đúc lại thành các khối hộp vuông lập phương nhỏ cạnh bằng 3 cm. Hỏi đúc được tối đa bao nhiêu khối lập phương hoàn chỉnh mà không hao hụt vật liệu?",
    options: [
      "12 khối",
      "10 khối",
      "8 khối",
      "9 khối"
    ],
    correct: 1,
    hint: "Tính thể tích thanh kim loại lăng trụ (1/2 x 6 x 6 x 15 = 270 cm³). Chia cho thể tích một khối lập phương nhỏ (3³ = 27 cm³).",
    explanation: "<strong>Lời giải chi tiết:</strong> <br>- Diện tích tam giác đáy vuông cân: Sđáy = 1/2 x 6 x 6 = 18 cm².<br>- Thể tích thanh kim loại ban đầu: Vthanh = 18 x 15 = 270 cm³.<br>- Thể tích của một khối lập phương nhỏ đúc ra: Vlp = 3 x 3 x 3 = 27 cm³.<br>- Số khối lập phương tối đa đúc được chỉnh chu là: 270 / 27 = 10 khối."
  },
  {
    cau: 20,
    question: "Một con ốc sên bò trên bề mặt xung quanh của một khối gỗ hình lăng trụ đứng đáy tam giác đều cạnh 5 cm, chiều cao đứng bằng 12 cm. Ốc sên bò xuất phát từ một đỉnh ở đáy dưới và muốn bò lên đỉnh đối diện nằm thẳng đứng thẳng hàng ở mặt đáy trên nhưng bằng cách bò vòng quanh bao quanh thân 1 vòng duy nhất. Quãng đường ngắn nhất ốc sên cần bò bằng bao nhiêu?",
    options: [
      "17 cm",
      "13 cm",
      "19.2 cm",
      "3+√41 cm"
    ],
    correct: 2,
    hint: "Sử dụng phương pháp trải phẳng không gian: Cắt dọc một cạnh bên lăng trụ đứng rồi mở tung ra thành một hình chữ nhật lớn rộng (3 x 5 = 15 cm) and cao 12 cm. Đường đi ngắn nhất chính là đường chéo hình chữ nhật này.",
    explanation: "<strong>Lời giải chi tiết:</strong> Khi ta rạch dọc theo một cạnh bên của lăng trụ và trải phẳng bẹt toàn bộ bề mặt xung quanh của hình lăng trụ đứng ra, ta sẽ thu được một hình chữ nhật lớn.<br>- Chiều rộng của hình chữ nhật lớn này bằng tổng chu vi đáy: 3 x 5 = 15 cm.<br>- Chiều cao của hình chữ nhật bằng đúng chiều cao khối lăng trụ: 12 cm.<br>- Theo định lý Pitago, độ dài đường chéo (quãng đường ngắn nhất sên bò) là: d = √(15² + 12²) = √(225 + 144) = √369 ≈ 19.2 cm."
  }
];

// Khai báo cấu hình riêng cho bài kiểm tra
const redirectUrl = "ketquakthltdtg.html";
const timerKey = "timer_hltdtg";
const topicId = "hltdtg";

// Kiểm tra chuyển đổi chủ đề để tránh xung đột dữ liệu localStorage
if (localStorage.getItem("activeTopic") !== topicId) {
  localStorage.setItem("daNopBaiTrangThai", "false");
  localStorage.setItem("dangXemLai", "false");
  localStorage.removeItem("mangDapAnNguoiDung");
  localStorage.removeItem("diemTracNghiem");
  for (let key in localStorage) {
    if (key.startsWith("timer_")) {
      localStorage.removeItem(key);
    }
  }
  localStorage.setItem("activeTopic", topicId);
}

// Khai báo biến trạng thái ban đầu
let viTriCauHienTai = 0;
let daNopBai = localStorage.getItem("daNopBaiTrangThai") === "true";
let dangXemLai = localStorage.getItem("dangXemLai") === "true";

// === ĐOẠN RESET CHỈ KHI LÀM BÀI MỚI TINH ===
if (!dangXemLai) {
  if (window.location.pathname.includes("kiemtrahltdtg.html")) {
    daNopBai = false;
    localStorage.setItem("daNopBaiTrangThai", "false");
    localStorage.setItem("dangXemLai", "false");
    localStorage.removeItem("mangDapAnNguoiDung");
    localStorage.removeItem(timerKey);
  }
}

// Khởi tạo mảng lưu đáp án người dùng
let mangDapAnNguoiDung =
  JSON.parse(localStorage.getItem("mangDapAnNguoiDung")) ||
  new Array(danhSachCauHoi.length).fill(null);

// Hàm hiển thị dữ liệu câu hỏi lên màn hình
function taiCauHoi() {
  const duLieuCauHoi = danhSachCauHoi[viTriCauHienTai];

  if (document.getElementById("question-number")) {
    document.getElementById("question-number").innerText =
      `Câu hỏi ${viTriCauHienTai + 1}/${danhSachCauHoi.length}`;
  }
  if (document.getElementById("question-text")) {
    document.getElementById("question-text").innerHTML =
      `${duLieuCauHoi.cau}. ${duLieuCauHoi.question}`;
  }

  // === ẨN CỤM GỢI Ý KHI ĐANG XEM LẠI BÀI ===
  const phanTuHint = document.getElementById("hint-text");
  const khungBoxHint = document.getElementById("hint-box");
  if (phanTuHint) {
    if (daNopBai && dangXemLai) {
      phanTuHint.innerHTML = "";
      if (khungBoxHint) khungBoxHint.style.display = "none";
    } else {
      phanTuHint.innerHTML = duLieuCauHoi.hint;
      if (khungBoxHint) khungBoxHint.style.display = "block";
    }
  }

  if (document.getElementById("progress-bar")) {
    const phanTramTienTrinh =
      ((viTriCauHienTai + 1) / danhSachCauHoi.length) * 100;
    document.getElementById("progress-bar").style.width =
      `${phanTramTienTrinh}%`;
  }

  const khungChuaOptions = document.getElementById("options-container");
  if (khungChuaOptions) {
    khungChuaOptions.innerHTML = "";

    // Tạo các nút đáp án A, B, C, D
    duLieuCauHoi.options.forEach((txtOption, index) => {
      const nutOption = document.createElement("button");
      nutOption.className = "option-btn";
      const kyTuDau = String.fromCharCode(65 + index);
      nutOption.innerHTML = `<strong>${kyTuDau}.</strong> ${txtOption}`;

      if (daNopBai && dangXemLai) {
        nutOption.disabled = true;
        if (index === duLieuCauHoi.correct) {
          nutOption.style.backgroundColor = "#2ecc71"; // Đúng -> Xanh lá
          nutOption.style.color = "white";
          nutOption.style.borderColor = "#27ae60";
        } else if (index === mangDapAnNguoiDung[viTriCauHienTai]) {
          nutOption.style.backgroundColor = "#e74c3c"; // Sai -> Đỏ
          nutOption.style.color = "white";
          nutOption.style.borderColor = "#c0392b";
        }
      } else {
        if (
          mangDapAnNguoiDung[viTriCauHienTai] !== null &&
          mangDapAnNguoiDung[viTriCauHienTai] === index
        ) {
          nutOption.classList.add("selected");
        }
      }

      nutOption.onclick = function () {
        chonDapAn(index);
      };
      khungChuaOptions.appendChild(nutOption);
    });

    // === HIỂN THỊ ĐÚNG/SAI VÀ LỜI GIẢI ĐỘNG ===
    if (daNopBai && dangXemLai) {
      const dapAnNguoiDung = mangDapAnNguoiDung[viTriCauHienTai];
      const laDung = dapAnNguoiDung === duLieuCauHoi.correct;

      let khungLoiGiai = document.getElementById("explanation-container");
      if (!khungLoiGiai) {
        khungLoiGiai = document.createElement("div");
        khungLoiGiai.id = "explanation-container";
        khungLoiGiai.style.marginTop = "25px";
        khungLoiGiai.style.padding = "15px";
        khungLoiGiai.style.borderRadius = "5px";
        khungLoiGiai.style.fontSize = "15px";
        khungLoiGiai.style.lineHeight = "1.6";
        khungChuaOptions.appendChild(khungLoiGiai);
      }

      if (laDung) {
        khungLoiGiai.style.backgroundColor = "#d4edda";
        khungLoiGiai.style.borderLeft = "5px solid #28a745";
        khungLoiGiai.style.color = "#155724";
        khungLoiGiai.innerHTML = `
          <h4 style="margin: 0 0 10px 0; color: #28a745;"> Kết quả: Chính xác!</h4>
          <div style="padding-top: 8px; border-top: 1px dashed #c3e6cb;">
            ${duLieuCauHoi.explanation}
          </div>
        `;
      } else {
        khungLoiGiai.style.backgroundColor = "#f8d7da";
        khungLoiGiai.style.borderLeft = "5px solid #dc3545";
        khungLoiGiai.style.color = "#721c24";

        const chuCaiNguoiDung =
          dapAnNguoiDung !== null
            ? String.fromCharCode(65 + dapAnNguoiDung)
            : "Chưa chọn";
        const chuCaiDung = String.fromCharCode(65 + duLieuCauHoi.correct);

        khungLoiGiai.innerHTML = `
          <h4 style="margin: 0 0 5px 0; color: #dc3545;"> Kết quả: Sai rồi!</h4>
          <p style="margin: 0 0 10px 0; font-size: 14px;">Bạn chọn: <strong>${chuCaiNguoiDung}</strong>. Đáp án đúng: <strong>${chuCaiDung}</strong>.</p>
          <div style="padding-top: 8px; border-top: 1px dashed #f5c6cb; color: #2c3e50;">
            ${duLieuCauHoi.explanation}
          </div>
        `;
      }
    }
  }

  if (document.getElementById("prev-btn")) {
    document.getElementById("prev-btn").disabled = viTriCauHienTai === 0;
  }

  capNhatNutDieuHuong();
  renderPalette();

  // Gọi MathJax kết xuất lại công thức toán học sau khi render câu hỏi động bằng JS
  if (window.MathJax && window.MathJax.typeset) {
    window.MathJax.typeset();
  }
}

// Hàm cập nhật trạng thái chữ trên nút điều hướng
function capNhatNutDieuHuong() {
  const nutNext = document.getElementById("next-btn");
  if (!nutNext) return;

  const soCauDaLam = mangDapAnNguoiDung.filter((ans) => ans !== null).length;

  if (daNopBai) {
    if (viTriCauHienTai === danhSachCauHoi.length - 1) {
      nutNext.innerText = "Thoát xem";
    } else {
      nutNext.innerText = "Tiếp theo";
    }
  } else {
    if (
      viTriCauHienTai === danhSachCauHoi.length - 1 ||
      soCauDaLam === danhSachCauHoi.length
    ) {
      nutNext.innerText = "Nộp bài";
    } else {
      nutNext.innerText = "Tiếp theo";
    }
  }
}

// Chọn đáp án (Hủy chọn nếu bấm 2 lần)
function chonDapAn(indexChon) {
  if (daNopBai) return;

  if (mangDapAnNguoiDung[viTriCauHienTai] === indexChon) {
    mangDapAnNguoiDung[viTriCauHienTai] = null;
  } else {
    mangDapAnNguoiDung[viTriCauHienTai] = indexChon;
  }

  localStorage.setItem(
    "mangDapAnNguoiDung",
    JSON.stringify(mangDapAnNguoiDung),
  );

  const danhSachNut = document.querySelectorAll(".option-btn");
  danhSachNut.forEach((nut, idx) => {
    if (idx === mangDapAnNguoiDung[viTriCauHienTai]) {
      nut.classList.add("selected");
    } else {
      nut.classList.remove("selected");
    }
  });

  capNhatNutDieuHuong();
  renderPalette();
}

// Bấm tiếp theo hoặc kích hoạt nộp bài chuyển trang
function cauTiepTheo() {
  const nutNext = document.getElementById("next-btn");
  if (!nutNext) return;
  const nutNextText = nutNext.innerText;

  if (
    nutNextText === "Tiếp theo" &&
    viTriCauHienTai < danhSachCauHoi.length - 1
  ) {
    viTriCauHienTai++;
    taiCauHoi();
    return;
  }

  if (nutNextText === "Nộp bài") {
    if (!daNopBai) {
      const viTriCauBoTrong = mangDapAnNguoiDung.findIndex(
        (ans) => ans === null,
      );
      const soCauChuaLam = mangDapAnNguoiDung.filter(
        (ans) => ans === null,
      ).length;

      if (soCauChuaLam > 0) {
        const xacNhanNop = confirm(
          `Bạn còn ${soCauChuaLam} câu chưa hoàn thành. Các câu này sẽ tính 0 điểm nếu bạn nộp bài bây giờ. Bạn có chắc chắn muốn nộp không?`
        );
        if (!xacNhanNop) {
          viTriCauHienTai = viTriCauBoTrong;
          taiCauHoi();
          return;
        }
      }

      nopBai(false);
    }
  }

  if (nutNextText === "Thoát xem") {
    localStorage.removeItem("daNopBaiTrangThai");
    localStorage.removeItem("dangXemLai");
    localStorage.removeItem("diemTracNghiem");

    const mangTrongMoi = new Array(danhSachCauHoi.length).fill(null);
    localStorage.setItem("mangDapAnNguoiDung", JSON.stringify(mangTrongMoi));
    localStorage.removeItem(timerKey);

    alert("Hệ thống sẽ đặt lại bài kiểm tra về trạng thái ban đầu!");
    window.location.href = window.location.pathname.split("/").pop();
  }
}

// Bấm nút quay lại câu hỏi phía trước
function cauTruoc() {
  if (viTriCauHienTai > 0) {
    viTriCauHienTai--;
    taiCauHoi();
  }
}

// Hàm nộp bài tính điểm
function nopBai(isAuto = false) {
  if (daNopBai) return;

  if (isAuto) {
    alert("Hết giờ làm bài! Hệ thống tự động nộp bài của bạn.");
  }

  daNopBai = true;
  let diemSo = 0;
  danhSachCauHoi.forEach((q, idx) => {
    if (mangDapAnNguoiDung[idx] === q.correct) {
      diemSo++;
    }
  });

  // --- BẮT ĐẦU PHẦN TÍCH HỢP HỆ THỐNG XU ---
  let xuDuocNhan = diemSo * 20;

  if (diemSo === 20) {
    xuDuocNhan += 100;
    alert(
      "Tuyệt vời! Bạn làm đúng hết tất cả các câu, nhận thêm 100 xu thưởng!",
    );
  }

  let tongXuHienTai = parseInt(localStorage.getItem("tongXu")) || 0;
  localStorage.setItem("tongXu", tongXuHienTai + xuDuocNhan);

  alert(
    `Bạn làm đúng: ${diemSo}/${danhSachCauHoi.length} câu.\nBạn nhận được: ${xuDuocNhan} xu!`
  );
  // --- KẾT THÚC PHẦN TÍCH HỢP ---

  localStorage.setItem("diemTracNghiem", diemSo);
  localStorage.setItem("tongSoCau", danhSachCauHoi.length);
  localStorage.setItem(
    "mangDapAnNguoiDung",
    JSON.stringify(mangDapAnNguoiDung),
  );
  localStorage.setItem("daNopBaiTrangThai", "true");

  if (timerInterval) {
    clearInterval(timerInterval);
  }
  localStorage.removeItem(timerKey);

  window.location.href = redirectUrl;
}

// --- BẢNG ĐIỀU HƯỚNG VÀ THEO DÕI TIẾN TRÌNH CÂU HỎI (QUESTION PALETTE) ---
function renderPalette() {
  const container = document.getElementById("question-palette-container");
  if (!container) return;

  container.innerHTML = "";

  const title = document.createElement("div");
  title.className = "palette-title";
  title.innerText = "Tiến độ câu hỏi";
  container.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "palette-grid";

  danhSachCauHoi.forEach((cau, i) => {
    const item = document.createElement("div");
    item.className = "palette-item";
    item.innerText = i + 1;

    if (daNopBai && dangXemLai) {
      if (mangDapAnNguoiDung[i] === cau.correct) {
        item.classList.add("correct");
      } else if (mangDapAnNguoiDung[i] !== null) {
        item.classList.add("incorrect");
      } else {
        item.classList.add("unanswered");
      }
    } else {
      if (mangDapAnNguoiDung[i] !== null) {
        item.classList.add("answered");
      } else {
        item.classList.add("unanswered");
      }
    }

    if (i === viTriCauHienTai) {
      item.classList.add("current");
    }

    item.onclick = function () {
      viTriCauHienTai = i;
      taiCauHoi();
    };

    grid.appendChild(item);
  });

  container.appendChild(grid);

  // Tạo thêm nút hành động Nộp bài / Làm lại ngay dưới Palette Grid
  const actionBtn = document.createElement("button");
  actionBtn.id = "palette-action-btn";

  if (daNopBai) {
    actionBtn.className = "palette-btn btn-retry";
    actionBtn.innerText = "Làm lại";
    actionBtn.onclick = function() {
      if (confirm("Bạn có chắc chắn muốn đặt lại và làm lại bài trắc nghiệm này từ đầu?")) {
        lamLai();
      }
    };
  } else {
    actionBtn.className = "palette-btn btn-submit";
    actionBtn.innerText = "Nộp bài";
    actionBtn.onclick = function() {
      const viTriCauBoTrong = mangDapAnNguoiDung.findIndex((ans) => ans === null);
      const soCauChuaLam = mangDapAnNguoiDung.filter((ans) => ans === null).length;

      if (soCauChuaLam > 0) {
        const xacNhanNop = confirm(
          `Bạn còn ${soCauChuaLam} câu chưa hoàn thành. Các câu này sẽ tính 0 điểm nếu bạn nộp bài bây giờ. Bạn có chắc chắn muốn nộp không?`
        );
        if (!xacNhanNop) {
          viTriCauHienTai = viTriCauBoTrong;
          taiCauHoi();
          return;
        }
      }
      nopBai(false);
    };
  }
  container.appendChild(actionBtn);
}

// --- BỘ ĐẾM THỜI GIAN LÀM BÀI (TIMER) ---
let timerInterval = null;

function startTimer() {
  if (daNopBai && dangXemLai) {
    const timerElement = document.getElementById("quiz-timer");
    if (timerElement) timerElement.style.display = "none";
    return;
  }

  const timerElement = document.getElementById("quiz-timer");
  const timerText = document.getElementById("timer-text");
  if (!timerElement || !timerText) return;

  timerElement.style.display = "flex";

  let remainingTime = parseInt(localStorage.getItem(timerKey));
  if (isNaN(remainingTime) || remainingTime < 0) {
    remainingTime = 1800; // 30 phút
    localStorage.setItem(timerKey, remainingTime);
  }

  capNhatGiaoDienTimer(remainingTime);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    remainingTime--;
    localStorage.setItem(timerKey, remainingTime);

    capNhatGiaoDienTimer(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      localStorage.removeItem(timerKey);
      nopBai(true);
    }
  }, 1000);
}

function capNhatGiaoDienTimer(seconds) {
  const timerText = document.getElementById("timer-text");
  const timerElement = document.getElementById("quiz-timer");
  if (!timerText || !timerElement) return;

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerText.innerText = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  if (seconds <= 300) {
    timerElement.classList.add("warning");
  } else {
    timerElement.classList.remove("warning");
  }
}

// Tự động chạy khi tải trang
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    taiCauHoi();
    startTimer();
  });
} else {
  taiCauHoi();
  startTimer();
}

// Bổ sung hàm tiện ích reset bài trắc nghiệm
function lamLai() {
  localStorage.removeItem("daNopBaiTrangThai");
  localStorage.removeItem("dangXemLai");
  localStorage.removeItem("diemTracNghiem");

  const mangTrongMoi = new Array(danhSachCauHoi.length).fill(null);
  localStorage.setItem("mangDapAnNguoiDung", JSON.stringify(mangTrongMoi));
  localStorage.removeItem(timerKey);

  alert("Đã đặt lại bài trắc nghiệm thành công!");
  window.location.href = window.location.pathname.split("/").pop();
}
