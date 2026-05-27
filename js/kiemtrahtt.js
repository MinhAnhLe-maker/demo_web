// Ngân hàng dữ liệu gồm 20 câu hỏi chia đều 4 mức độ dành riêng cho HÌNH TRỤ TRÒN
const danhSachCauHoi = [
  // --- MỨC ĐỘ: NHẬN BIẾT ---
  {
    cau: 1,
    question:
      "Hình trụ tròn được tạo thành khi quay một hình phẳng nào sau đây quanh một cạnh cố định của nó?",
    options: [
      "Hình tam giác vuông",
      "Hình chữ nhật",
      "Hình nửa hình tròn",
      "Hình bình hành",
    ],
    correct: 1,
    hint: "Hãy tưởng tượng khi bạn quay một chiếc lá cờ hình chữ nhật quanh trục cán cờ, đường quét trong không gian tạo ra khối gì?",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Theo định nghĩa hình học không gian, khi quay một hình chữ nhật một vòng quanh một cạnh cố định của nó, ta sẽ thu được một hình trụ tròn.",
  },
  {
    cau: 2,
    question:
      "Trong một hình trụ tròn, mối quan hệ giữa chiều cao $h$ và độ dài đường sinh $l$ được thể hiện như thế nào?",
    options: ["$h = 2l$", "$h = l$", "$h = l^2$", "$h = \\sqrt{l}$"],
    correct: 1,
    hint: "Hình trụ tròn có các đường sinh vuông góc với hai đáy phẳng và song song với trục.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Đối với hình trụ tròn (hình trụ đứng thẳng), các đường sinh luôn song song và có độ dài bằng đúng chiều cao nối giữa hai tâm mặt đáy, tức là $h = l$.",
  },
  {
    cau: 3,
    question:
      "Hai mặt đáy của một hình trụ tròn luôn thuộc dạng hình phẳng nào và có tính chất gì?",
    options: [
      "Hai hình tròn bằng nhau và nằm trên hai mặt phẳng song song",
      "Hai hình bầu dục elip bằng nhau",
      "Hai hình tròn có bán kính khác nhau",
      "Hai hình tròn cắt nhau",
    ],
    correct: 0,
    hint: "Hãy nhìn vào đáy của một lon sữa đặc hoặc ống cống tròn xem dạng hình học phẳng của tụi nó ra sao.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình trụ tròn có cấu trúc hai đáy là hai hình tròn hoàn toàn bằng nhau (có cùng bán kính $r$) và cùng nằm trên hai mặt phẳng song song với nhau.",
  },
  {
    cau: 4,
    question:
      "Cho hình trụ có bán kính đáy $r$ và chiều cao $h$. Công thức chính xác để tính diện tích xung quanh $S_{xq}$ của hình trụ là gì?",
    options: [
      "$S_{xq} = \\pi r h$",
      "$S_{xq} = 2 \\pi r h$",
      "$S_{xq} = 2 \\pi r^2 h$",
      "$S_{xq} = \\pi r^2$",
    ],
    correct: 1,
    hint: "Diện tích xung quanh của hình trụ bằng chu vi đường tròn mặt đáy nhân phối với chiều cao.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Chu vi đáy của hình tròn là $2\\pi r$. Nhân thêm chiều cao $h$ ta thu được công thức diện tích xung quanh vỏ trụ: $S_{xq} = 2 \\pi r h$.",
  },
  {
    cau: 5,
    question:
      "Cho hình trụ có bán kính đáy $r$ và chiều cao $h$. Công thức tính thể tích khối trụ tròn $V$ là công thức nào dưới đây?",
    options: [
      "$V = \\pi r^2 h$",
      "$V = \\frac{1}{3} \\pi r^2 h$",
      "$V = 2 \\pi r h$",
      "$V = 2 \\pi r^2 h$",
    ],
    correct: 0,
    hint: "Thể tích khối trụ được tính bằng diện tích của mặt đáy phẳng nhân chồng ghép theo chiều cao.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích hình tròn đáy là $S = \\pi r^2$. Khi nhân với chiều cao $h$, ta có thể tích toàn khối trụ đứng: $V = \\pi r^2 h$.",
  },
  // --- MỨC ĐỘ: THÔNG HIỂU ---
  {
    cau: 6,
    question:
      "Tính diện tích xung quanh của hình trụ tròn có bán kính đáy $r = 5\\text{ cm}$ và chiều cao $h = 4\\text{ cm}$ (lấy $\\pi \\approx 3,14$).",
    options: ["62,8 cm²", "125,6 cm²", "314 cm²", "78,5 cm²"],
    correct: 1,
    hint: "Áp dụng công thức tính nhanh diện tích xung quanh: $2 \\times 3,14 \\times 5 \\times 4$.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Thế số vào công thức: $S_{xq} = 2 \\pi r h = 2 \\times 3,14 \\times 5 \\times 4 = 125,6\\text{ cm}^2$.",
  },
  {
    cau: 7,
    question:
      "Một lon nước ngọt có dạng hình trụ với bán kính đáy bằng $3\\text{ cm}$ và chiều cao bằng $10\\text{ cm}$. Tính diện tích toàn phần của lon nước đó.",
    options: [
      "$60\\pi\\text{ cm}^2$",
      "$18\\pi\\text{ cm}^2$",
      "$78\\pi\\text{ cm}^2$",
      "$96\\pi\\text{ cm}^2$",
    ],
    correct: 2,
    hint: "Diện tích toàn phần bằng diện tích xung quanh ($60\\pi\\text{ cm}^2$) cộng ghép thêm diện tích của cả 2 mặt đáy tròn ($2 \\times \\pi \\times 3^2$).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Ta có:<br>- $S_{xq} = 2\\pi r h = 2\\pi \\times 3 \\times 10 = 60\\pi\\text{ cm}^2$.<br>- Diện tích hai đáy: $2 \\times S_{\\text{đáy}} = 2 \\times \\pi r^2 = 2\\pi \\times 3^2 = 18\\pi\\text{ cm}^2$.<br>- $S_{tp} = S_{xq} + 2S_{\\text{đáy}} = 60\\pi + 18\\pi = 78\\pi\\text{ cm}^2$.",
  },
  {
    cau: 8,
    question:
      "Tính thể tích $V$ của một khối trụ tròn có đường kính đáy bằng $8\\text{ dm}$ và chiều cao nối tâm bằng $5\\text{ dm}$.",
    options: [
      "$320\\pi\\text{ dm}^3$",
      "$80\\pi\\text{ dm}^3$",
      "$40\\pi\\text{ dm}^3$",
      "$160\\pi\\text{ dm}^3$",
    ],
    correct: 1,
    hint: "Đề bài cho đường kính, hãy tìm bán kính bằng cách chia đôi trước khi tính toán thể tích nhé.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Bán kính đáy là $r = 8 / 2 = 4\\text{ dm}$. Thể tích khối trụ là: $V = \\pi r^2 h = \\pi \\times 4^2 \\times 5 = 80\\pi\\text{ dm}^3$.",
  },
  {
    cau: 9,
    question:
      "Một khối trụ đứng có diện tích xung quanh bằng $80\\pi\\text{ cm}^2$ và bán kính đáy bằng $4\\text{ cm}$. Chiều cao của khối trụ đứng này là bao nhiêu?",
    options: ["10 cm", "5 cm", "20 cm", "8 cm"],
    correct: 0,
    hint: "Từ công thức $S_{xq} = 2\\pi r h$, muốn tìm chiều cao ta lấy diện tích xung quanh chia cho cụm $(2\\pi r)$.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Chiều cao $h$ được tính bằng biến đổi: $h = S_{xq} / (2\\pi r) = 80\\pi / (2\\pi \\times 4) = 80\\pi / 8\\pi = 10\\text{ cm}$.",
  },
  {
    cau: 10,
    question:
      "Nếu một hình trụ có thể tích khối bằng $54\\pi\\text{ m}^3$ và chiều cao đo được bằng $6\\text{ m}$, hãy tìm bán kính đáy của nó.",
    options: ["9 m", "3 m", "4,5 m", "6 m"],
    correct: 1,
    hint: "Tính diện tích đáy bằng cách lấy thể tích chia cho chiều cao, sau đó rút căn bậc hai để tìm ra bán kính $r$.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Ta có $V = \\pi r^2 h \\Rightarrow 54\\pi = \\pi r^2 \\times 6 \\Rightarrow r^2 = 54\\pi / 6\\pi = 9 \\Rightarrow r = 3\\text{ m}$.",
  },
  // --- MỨC ĐỘ: VẬN DỤNG ---
  {
    cau: 11,
    question:
      "Người ta uốn một tấm tôn phẳng hình chữ nhật có kích thước $4\\pi\\text{ m}$ và $3\\text{ m}$ thành vỏ một thùng chứa nước hình trụ không nắp cao $3\\text{ m}$. Tính diện tích miếng tôn đáy cần có để lắp kín đáy thùng.",
    options: [
      "$4\\pi\\text{ m}^2$",
      "$16\\pi\\text{ m}^2$",
      "$2\\pi\\text{ m}^2$",
      "$8\\pi\\text{ m}^2$",
    ],
    correct: 0,
    hint: "Cạnh $4\\pi\\text{ m}$ chính là chu vi đường tròn đáy sau khi cuộn tròn lại. Hãy tìm bán kính từ chu vi đáy này.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Chiều cao hình trụ là $h = 3\\text{ m}$, suy ra chu vi đáy tròn là $C = 2\\pi r = 4\\pi \\Rightarrow r = 2\\text{ m}$. Diện tích tấm tôn làm đáy thùng kín là: $S_{\\text{đáy}} = \\pi r^2 = \\pi \\times 2^2 = 4\\pi\\text{ m}^2$.",
  },
  {
    cau: 12,
    question:
      "Một bể chứa nước hình trụ tròn có đường kính trong lòng bể bằng $2\\text{ m}$ và chiều sâu (chiều cao) là $1,5\\text{ m}$. Hiện tại bể trống hoàn toàn. Nếu mở vòi nước chảy vào bể với tốc độ $50\\text{ lít/phút}$ thì mất bao lâu sẽ đầy bể? (Lấy $\\pi \\approx 3,14$ và $1\\text{ dm}^3 = 1\\text{ lít}$).",
    options: ["62,8 phút", "94,2 phút", "47,1 phút", "125,6 phút"],
    correct: 1,
    hint: "Tính bán kính ($1\\text{ m}$), tính thể tích ra mét khối ($3,14\\text{ m}^3$), đổi sang lít rồi chia thẳng cho lượng chảy 50.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Bán kính đáy bể $r = 2 / 2 = 1\\text{ m}$. Thể tích bể nước: $V = \\pi r^2 h = 3,14 \\times 1^2 \\times 1,5 = 4,71\\text{ m}^3$. Quy đổi đơn vị: $4,71\\text{ m}^3 = 4710\\text{ dm}^3 = 4710\\text{ lít}$. Thời gian vòi nước chảy đầy bể là: $4710 / 50 = 94,2\\text{ phút}$.",
  },
  {
    cau: 13,
    question:
      "Nếu ta tiến hành tăng bán kính đáy của một khối trụ tròn lên gấp 2 lần, đồng thời giảm chiều cao của khối trụ đó đi 4 lần thì thể tích tổng thể của khối trụ sẽ thay đổi như thế nào?",
    options: [
      "Tăng lên gấp 2 lần",
      "Giảm đi mất 2 lần",
      "Giữ nguyên không thay đổi",
      "Tăng lên gấp 4 lần",
    ],
    correct: 2,
    hint: "Hãy chú ý rằng trong công thức thể tích, bán kính đáy $r$ tham gia ở dạng bình phương ($r^2$).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Công thức ban đầu $V_1 = \\pi r^2 h$. Khi thay đổi, bán kính mới là $2r$ và chiều cao mới là $h/4$. Thể tích mới thu được: $V_2 = \\pi (2r)^2 \\times \\frac{h}{4} = \\pi \\times 4r^2 \\times \\frac{h}{4} = \\pi r^2 h = V_1$. Do đó thể tích hoàn toàn không thay đổi.",
  },
  {
    cau: 14,
    question:
      "Một hình trụ đứng có thiết diện qua trục đối xứng là một hình vuông có diện tích bề mặt bằng $36\\text{ cm}^2$. Tính thể tích khối trụ tròn đó.",
    options: [
      "$54\\pi\\text{ cm}^3$",
      "$27\\pi\\text{ cm}^3$",
      "$108\\pi\\text{ cm}^3$",
      "$36\\pi\\text{ cm}^3$",
    ],
    correct: 1,
    hint: "Thiết diện qua trục là hình vuông nghĩa là chiều cao bằng đường kính đáy ($h = 2r$). Cạnh hình vuông bằng $\\sqrt{36} = 6\\text{ cm}$.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Vì thiết diện qua trục là hình vuông diện tích $36\\text{ cm}^2$ nên cạnh của hình vuông đó dài $\\sqrt{36} = 6\\text{ cm}$. Từ đó suy ra chiều cao $h = 6\\text{ cm}$ và đường kính đáy bằng $6\\text{ cm} \\Rightarrow r = 3\\text{ cm}$. Thể tích khối trụ là: $V = \\pi r^2 h = \\pi \\times 3^2 \\times 6 = 27\\pi\\text{ cm}^3$.",
  },
  {
    cau: 15,
    question:
      "Một cái xô hình trụ không nắp được làm bằng tôn có bán kính đáy $r = 14\\text{ cm}$ và đường sinh cao $h = 30\\text{ cm}$. Giả sử phần mép hàn ráp nối không đáng kể, hãy tính diện tích tôn tối thiểu dùng để gò chiếc xô đó.",
    options: ["3256 cm²", "2640 cm²", "3872 cm²", "3024 cm²"],
    correct: 0,
    hint: "Xô nước không nắp nghĩa là phần tôn bao quanh chỉ bao gồm diện tích xung quanh vỏ cộng với đúng một diện tích đáy tròn thôi (lấy $\\pi \\approx 22/7$ hoặc $3,14$).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Áp dụng $\\pi \\approx 22/7$:<br>- Diện tích bao quanh: $S_{xq} = 2\\pi r h = 2 \\times \\frac{22}{7} \\times 14 \\times 30 = 2640\\text{ cm}^2$.<br>- Diện tích tấm tròn làm đáy: $S_{\\text{đáy}} = \\pi r^2 = \\frac{22}{7} \\times 14^2 = 616\\text{ cm}^2$.<br>- Tổng diện tích tôn cán gò: $S = S_{xq} + S_{\\text{đáy}} = 2640 + 616 = 3256\\text{ cm}^2$.",
  },
  // --- MỨC ĐỘ: VẬN DỤNG CAO ---
  {
    cau: 16,
    question:
      "Một bể hình trụ đứng bán kính đáy $0,8\\text{ m}$, cao $2\\text{ m}$ đang chứa lượng nước cao bằng một nửa bể. Thả chìm hoàn toàn vào bể một khối sắt đặc hình hộp chữ nhật có kích thước dài $1\\text{ m}$, rộng $0,5\\text{ m}$ và cao $0,6\\text{ m}$. Hỏi mực nước trong bể dâng cao lên thêm bao nhiêu mét?",
    options: ["0,15 m", "0,25 m", "0,30 m", "0,06 m"],
    correct: 0,
    hint: "Thể tích khối nước dâng lên dạng trụ tròn nhỏ đúng bằng thể tích của khối hộp chữ nhật đặc chiếm chỗ.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Thể tích khối hộp chữ nhật thả vào bể là: $V_{\\text{hộp}} = 1 \\times 0,5 \\times 0,6 = 0,3\\text{ m}^3$. Lượng thể tích này làm nước dâng lên một đoạn chiều cao là $\\Delta h$ dạng khối trụ. Ta có: $V_{\\text{dâng}} = \\pi r^2 \\times \\Delta h \\Rightarrow 0,3 = 3,14 \\times 0,8^2 \\times \\Delta h \\Rightarrow 0,3 = 2,0096 \\times \\Delta h \\Rightarrow \\Delta h \\approx 0,15\\text{ m}$.",
  },
  {
    cau: 17,
    question:
      "Có một khối gỗ hình lập phương cạnh đúng bằng $10\\text{ cm}$. Bác thợ mộc muốn tiện đẽo khối gỗ đó thành một khối hình trụ tròn có thể tích lớn nhất có thể. Tính thể tích khối trụ lớn nhất thu được.",
    options: [
      "$500\\pi\\text{ cm}^3$",
      "$1000\\pi\\text{ cm}^3$",
      "$2500\\pi\\text{ cm}^3$",
      "$250\\pi\\text{ cm}^3$",
    ],
    correct: 3,
    hint: "Để khối trụ có thể tích lớn nhất nằm gọn trong khối lập phương thì chiều cao của nó và đường kính đáy của nó phải bằng đúng cạnh khối vuông ($h = 10\\text{ cm}, 2r = 10\\text{ cm}$).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Để tiện được khối trụ lớn nhất từ khối lập phương cạnh $10\\text{ cm}$, khối trụ phải có chiều cao $h = 10\\text{ cm}$ và đường kính đáy bằng $10\\text{ cm} \\Rightarrow r = 5\\text{ cm}$. Thể tích khối trụ lớn nhất thu được là: $V = \\pi r^2 h = \\pi \\times 5^2 \\times 10 = 250\\pi\\text{ cm}^3$.",
  },
  {
    cau: 18,
    question:
      "Một tấm tôn hình chữ nhật kích thước phẳng $12\\text{ cm} \\times 8\\text{ cm}$. Người ta có thể cuộn tròn tấm tôn này theo chiều dài hoặc chiều rộng để tạo thành mặt xung quanh của hai hình trụ đứng khác nhau. Kí hiệu $V_1$ là thể tích khi cuộn theo chiều dài và $V_2$ là thể tích khi cuộn theo chiều rộng. Tính tỉ số $V_1 / V_2$.",
    options: ["1,5", "0,66", "1", "2,25"],
    correct: 0,
    hint: "Khi cuộn theo chiều nào thì chiều đó trở thành chu vi đáy, chiều còn lại đóng vai trò là chiều cao. Hãy lập tỉ số biến thiên nghịch đảo.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> <br>- Trường hợp 1 (cuộn theo chiều dài 12): Chu vi đáy $2\\pi r_1 = 12 \\Rightarrow r_1 = 6/\\pi$; chiều cao $h_1 = 8$. Suy ra $V_1 = \\pi r_1^2 h_1 = \\pi \\times (6/\\pi)^2 \\times 8 = 288/\\pi$.<br>- Trường hợp 2 (cuộn theo chiều rộng 8): Chu vi đáy $2\\pi r_2 = 8 \\Rightarrow r_2 = 4/\\pi$; chiều cao $h_2 = 12$. Suy ra $V_2 = \\pi r_2^2 h_2 = \\pi \\times (4/\\pi)^2 \\times 12 = 192/\\pi$.<br>- Tỉ số thể tích: $V_1 / V_2 = (288/\\pi) / (192/\\pi) = 288 / 192 = 1,5$.",
  },
  {
    cau: 19,
    question:
      "Một hình trụ tròn có tổng diện tích toàn phần bằng $24\\pi\\text{ cm}^2$. Tìm giá trị chiều cao $h$ và bán kính $r$ của hình trụ sao cho thể tích không gian của khối trụ đạt giá trị lớn nhất.",
    options: [
      "$r = 2\\text{ cm}, h = 4\\text{ cm}$",
      "$r = 4\\text{ cm}, h = 2\\text{ cm}$",
      "$r = 2\\text{ cm}, h = 2\\text{ cm}$",
      "$r = 3\\text{ cm}, h = 3\\text{ cm}$",
      "$r = 2\\text{ cm}, h = 4\\text{ cm}$",
    ],
    correct: 0,
    hint: "Rút chiều cao $h$ từ phương trình diện tích toàn phần thế vào hàm thể tích $V(r)$, sau đó dùng bất đẳng thức hoặc đạo hàm tìm cực trị.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Ta có $S_{tp} = 2\\pi r^2 + 2\\pi r h = 24\\pi \\Rightarrow r^2 + rh = 12 \\Rightarrow h = \\frac{12 - r^2}{r}$.<br>- Hàm thể tích khối trụ theo ẩn biến $r$ là: $V = \\pi r^2 h = \\pi r^2 \\left(\\frac{12 - r^2}{r}\\right) = \\pi (12r - r^3)$.<br>- Khảo sát lấy đạo hàm: $V'(r) = \\pi (12 - 3r^2) = 0 \\Rightarrow r = 2\\text{ cm}$ (vì $r > 0$).<br>- Thay ngược lại tìm chiều cao: $h = (12 - 2^2) / 2 = 4\\text{ cm}$. Khi đó thể tích đạt cực đại.",
  },
  {
    cau: 20,
    question:
      "Một sợi dây thép mảnh dài $2\\text{ m}$ được quấn quanh thân một ống cống hình trụ tròn thành đúng 4 vòng khít đều từ đáy dưới lên đến đỉnh đỉnh trên. Biết đường kính ngoài của ống cống trụ đứng bằng $\\frac{3}{\\pi}\\text{ dm}$. Tính chiều cao tổng thể của ống cống trụ đó.",
    options: ["1,2 m", "1,6 m", "1,8 m", "1,5 m"],
    correct: 1,
    hint: "Sử dụng phương pháp cắt dọc vỏ trụ trải phẳng bẹt ra: Quấn 4 vòng khít đều sẽ tạo thành cạnh huyền của 4 tam giác vuông bằng nhau xếp chồng.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Đổi đường kính ống cống: $d = \\frac{3}{\\pi}\\text{ dm} = \\frac{0,3}{\\pi}\\text{ m}$. Chu vi đáy tròn của ống cống là: $C = \\pi d = \\pi \\times \\frac{0,3}{\\pi} = 0,3\\text{ m}$.<br>- Khi trải phẳng mặt xung quanh hình trụ ra một mặt phẳng phẳng, mỗi vòng quấn của sợi thép sẽ trở thành đường chéo cạnh huyền của một tam giác vuông có một cạnh góc vuông là chu vi đáy $C = 0,3\\text{ m}$.<br>- Vì quấn 4 vòng nên tổng độ dài hình chiếu các cạnh huyền là sợi dây dài $2\\text{ m}$, suy ra mỗi vòng dây dài: $2 / 4 = 0,5\\text{ m}$.<br>- Gọi chiều cao mỗi tầng phân đoạn là $h_1$, áp dụng định lý Pythagore: $h_1 = \\sqrt{0,5^2 - 0,3^2} = \\sqrt{0,25 - 0,09} = 0,4\\text{ m}$.<br>- Chiều cao tổng thể toàn bộ ống cống là: $h = 4 \\times h_1 = 4 \\times 0,4 = 1,6\\text{ m}$.",
  },
];

// Khai báo cấu hình riêng cho bài kiểm tra
const redirectUrl = "ketquaktrahtt.html";
const timerKey = "timer_htt";
const topicId = "htt";

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

// Chỉ reset trạng thái khi người dùng vào làm bài mới hoàn toàn (Không phải từ xem lại kết quả)
if (!dangXemLai) {
  if (window.location.pathname.includes("kiemtrahtt.html")) {
    daNopBai = false;
    localStorage.setItem("daNopBaiTrangThai", "false");
    localStorage.setItem("dangXemLai", "false");
    localStorage.removeItem("mangDapAnNguoiDung");
    localStorage.removeItem(timerKey);
  }
}

// Khởi tạo mảng lưu đáp án của người dùng
let mangDapAnNguoiDung =
  JSON.parse(localStorage.getItem("mangDapAnNguoiDung")) ||
  new Array(danhSachCauHoi.length).fill(null);

// Hàm kết xuất và tải nội dung câu hỏi lên giao diện
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

  // Quản lý hiển thị khung gợi ý nhỏ
  const phanTuHint = document.getElementById("hint-text");
  if (phanTuHint) {
    const thongTinBocNgoai = phanTuHint.parentElement;
    if (daNopBai && dangXemLai) {
      phanTuHint.innerHTML = "";
      if (
        thongTinBocNgoai &&
        thongTinBocNgoai.id !== "quiz-container" &&
        thongTinBocNgoai.tagName !== "BODY"
      ) {
        thongTinBocNgoai.style.display = "none";
      } else {
        phanTuHint.style.display = "none";
      }
    } else {
      phanTuHint.innerHTML = duLieuCauHoi.hint;
      phanTuHint.style.display = "block";
      if (
        thongTinBocNgoai &&
        thongTinBocNgoai.id !== "quiz-container" &&
        thongTinBocNgoai.tagName !== "BODY"
      ) {
        thongTinBocNgoai.style.display = "block";
      }
    }
  }

  // Cập nhật thanh tiến trình làm bài
  if (document.getElementById("progress-bar")) {
    const phanTramTienTrinh =
      ((viTriCauHienTai + 1) / danhSachCauHoi.length) * 100;
    document.getElementById("progress-bar").style.width =
      `${phanTramTienTrinh}%`;
  }

  const khungChuaOptions = document.getElementById("options-container");
  if (khungChuaOptions) {
    khungChuaOptions.innerHTML = "";

    // Kết xuất động các nút lựa chọn A, B, C, D
    duLieuCauHoi.options.forEach((txtOption, index) => {
      const nutOption = document.createElement("button");
      nutOption.className = "option-btn";
      const kyTuDau = String.fromCharCode(65 + index);
      nutOption.innerHTML = `<strong>${kyTuDau}.</strong> ${txtOption}`;

      if (daNopBai && dangXemLai) {
        nutOption.disabled = true; // Khóa chức năng tương tác click khi đang xem giải
        if (index === duLieuCauHoi.correct) {
          nutOption.style.backgroundColor = "#2ecc71"; // Đáp án đúng đổi thành Xanh lá
          nutOption.style.color = "white";
          nutOption.style.borderColor = "#27ae60";
        } else if (index === mangDapAnNguoiDung[viTriCauHienTai]) {
          nutOption.style.backgroundColor = "#e74c3c"; // Lựa chọn sai đổi thành màu Đỏ
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

    // Tạo khung hiển thị kết quả đúng/sai cùng lời giải chi tiết (chế độ xem lại bài)
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

  // Gọi MathJax kết xuất lại công thức toán học sau khi tải nội dung mới vào HTML
  if (window.MathJax && window.MathJax.typeset) {
    window.MathJax.typeset();
  }

  capNhatNutDieuHuong();
  renderPalette();
}

// Cập nhật text động hiển thị trên nút chức năng (Tiếp theo / Nộp bài / Thoát xem)
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

// Xử lý sự kiện khi học sinh click lựa chọn đáp án
function chonDapAn(indexChon) {
  if (daNopBai) return;

  if (mangDapAnNguoiDung[viTriCauHienTai] === indexChon) {
    mangDapAnNguoiDung[viTriCauHienTai] = null; // Bấm lần 2 -> Hủy chọn câu đó
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
}

// Hàm xử lý khi bấm nút Tiến lên hoặc Nộp bài tính điểm
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
