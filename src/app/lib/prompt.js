export const getWarmUpRoundPrompt = (topics) => `
Bạn sẽ đóng vai trò là một phần mêm đề xuất câu hỏi cho cuộc thi "đường lên đỉnh Olympia" cho phần thi khởi động 

Trước hết bạn phải hiểu về khái niệm: Chủ đề Olympia, nó sẽ gồm các phần:
- Toán: gồm kiến thức lý thuyết và một số ứng dụng nhỏ về các khái niệm số học trong sách giáo khoa từ lớp 8 cho đến giữa học kỳ 1 lớp 12
- Lý, Hóa, Tiếng Anh, Văn, Sử, Địa, Sinh: Ở các chủ đề này sẽ bao gồm kiến thức trong sách giáo khoa từ lớp 8 cho đến giữa học kỳ 1 lớp 12
- Thể thao, Hiểu biết chung, Lĩnh vực khác: gồm và chỉ gồm các thông tin mang tính cập nhật, hoặc các thông tin phổ biến (nhiều người quan tâm)

Input là từ khóa
- ví dụ
    - "Toán 12", "Lí 11"
    - "Hàm số"
    - “Văn học trung đại”
- người dùng có thể chọn nhiều từ khóa khác nhau cùng lúc

Và bây giờ bạn sẽ suy nghĩ input của người dùng và không được hiển thị chúng theo từng bước sau: 

- Bước 1: lọc từ khóa: những từ không có trong “Chủ đề Olympia” mà tôi đã chỉ cho bạn phía trên Ví dụ: Toán 13, Toán đại học, Lý thuyết đại học, tăng tốc,… sẽ mặc định là không tồn tại trong input và tiếp tục xử lý
- Bước 2: phân loại từ khóa:
    - Loại 1: Lĩnh vực/ khối lớp: ví dụ: Lý 11, hóa 12, Lĩnh vực khác, …
    - Loại 2: Chuyên đề: ví dụ: Hàm số, văn học trung đại, …
- Bước 3: Tìm liên kết của các từ khóa và đếm số lĩnh vực
    - Bạn sẽ xem xét tính liên kết các từ khóa:  VD “hàm số” và “toán 12” sẽ liên quan đến nhau, và bạn bạn sẽ kết hợp nó thành 1 lĩnh vực: “chuyên đề hàm số toán 12”
    - Với một từ khóa không có tính liên kết, nó sẽ được đếm là một lĩnh vực

Bạn hãy đếm số lĩnh vực và đánh số các lĩnh vực bắt đầu từ 1
Xét từng lĩnh vực từ lĩnh vực 1 đến hết, hãy hoàn thành tất cả các yêu cầu sau:

Hãy tạo ra đủ 3 câu hỏi và đáp án thuộc lĩnh vực bạn đang xét thỏa mãn các yêu cầu sau:
- Nội dung cần đảm bảo:
    - Vùng kiến thức: nằm trong trong lĩnh vực bạn đang xét và nằm trong chủ đề Olympia tôi đã chỉ cho bạn phía trên. Riêng chủ đề hay lĩnh vực “Toán”, các câu hỏi chỉ xoay quanh kiến thức lý thuyết, một số lý thuyết và bài tập cơ bản có thể tính nhẩm của số học từ sách giáo khoa lớp 8 đến giữa học kỳ 1 lớp 12
    - Kiến thức cần: phổ thông, nhiều người biết và quan tâm
    - Kiến thức cần phù hợp với học sinh trung học phổ thông ở Việt Nam
    - Câu hỏi và đáp án cần đảm bảo các quy tắc diễn đạt
    - đáp án phải diễn đạt ngắn gọn, chỉ chứa câu trả lời và có ít hơn 9 từ
- Hình thức:
    - 2 câu hỏi đầu tiên luôn là câu hỏi yêu cầu tìm đáp án đúng: Ví dụ: Nguyễn Đình Chiểu còn được dân gian gọi là "Đồ Chiểu" vì ông làm nghề gì
    - Câu hỏi số 3 sẽ có một trong 2 hình thức sau
        - câu hỏi yêu cầu điền vào chỗ trống: Ví dụ: "Thành đồng Tổ quốc" là danh hiệu Chủ tịch Hồ Chí Minh trao tặng cho đồng bào …?
        - câu hỏi lựa chọn: chọn đúng sai, chọn đáp án đúng (tối đa là 3 đáp án, và không được viết ký tự A,B,C,D,E,… phía trước): Thay vì viết “Giấm ăn làm quỳ tím chuyển màu gì? A) Đỏ,  B) Xanh” thì hãy viết “Giấm ăn làm quỳ tím chuyển màu gì, đỏ hay xanh?”

Sau đó, hãy trả về kết quả ở dạng JSON Format (chỉ cần trả về JSON, không cần trả về các thông tin khác) theo ví dụ mẫu sau:
'''
{
    "questions": [
        {
            "id": 1,
            "question": <câu hỏi 1>,
            "answer": <đáp án 1>
            "topic": <chủ đề tương ứng từ input>
        },
        {
            "id": 2,
            "question": <câu hỏi 2>,
            "answer": <đáp án 2>
            "topic": <chủ đề tương ứng từ input>
        },
        {
            "id": 3,
            "question": <câu hỏi 3>,
            "answer": <đáp án 3>
            "topic": <chủ đề tương ứng từ input>
        },
        ...
    ]
}
'''
Lưu ý: 
- Bạn không cần trình bày chi tiết các bước, hãy xử lý và trả về kết quả JSON cuối cùng.
- Đảm bảo rằng mỗi topic đều đã được tạo câu hỏi tương ứng
Input: ${topics}
`

export const getObstacleRoundPrompt = (topics) => `
Bạn sẽ đóng vai trò là một phần mêm đề xuất câu hỏi cho cuộc thi "đường lên đỉnh Olympia" cho phần thi vượt chướng ngại vật

Người dùng sẽ đưa ra input, và bạn sẽ tuân theo các bước của tôi và đưa ra output như tôi yêu cầu
- Ví dụ về input:
    - “Văn học việt nam”
    - “Văn học trung đại”
    - “Toán học”

Và bây giờ bạn sẽ suy nghĩ input của người dùng theo từng bước sau và không được hiển thị nó:
Bước 1: Coi input là "lĩnh vực chính".
Bước 2: Hãy tìm một chướng ngại vật đảm bảo các yêu câu sau:
- chướng ngại vật là một cụm từ ngắn gọn, súc tích khoảng 2 đến 20 ký tự
- chướng ngại vật phải là một khía cạnh hoặc một phần của "lĩnh vực chính", nhưng không phải là toàn bộ lĩnh vực đó.
- chướng ngại vật phải là một cụm từ phổ biến với học sinh trung học phổ thông Việt Nam

Bước 3: Tiếp theo bạn hãy tìm 5 từ khóa thỏa mãn các điều kiện sau:
- Mỗi từ khóa phải khác biệt và không được lặp lại trong 5 câu hỏi.
- từ khóa có thể là số, có thể là từ, cụm từ khoảng 1 đến 16 ký tự
- 'Từ khóa' được chọn để tạo câu hỏi phải liên quan mật thiết đến 'chướng ngại vật' nhưng không được trùng hoặc chứa bất kỳ từ nào của 'chướng ngại vật'.
- từ khóa phải là một cụm từ phổ biến với học sinh trung học phổ thông
- Các từ khóa cần có khác nhau về cách mà nó liên quan tới chướng ngại vật: Ví dụ: chướng ngại vật là “ẩn dụ” thì từ khóa chỉ được chứa 1 trong 3 từ “Nhân hóa”, “Biểu cảm”, “So sánh” vì 3 từ này quá giống nhau và đều là biện pháp tu từ

Sau khi suy nghĩ 4 bước trên, Hãy hiển thị Output gồm:
- Hãy tạo ra 5 câu hỏi có đáp án là 5 từ khóa và hiển thị nó dưới dạng Json thỏa mãn các điều kiện sau:
    + Mỗi câu hỏi phải có hình thức 'tìm đáp án đúng' với một câu trả lời cụ thể và rõ ràng.
    + câu hỏi không được trùng bất kỳ từ nào trong chướng ngại vật
    + câu hỏi phải ngắn gọn, trọng tâm, đảm bảo về quy tắc diễn đạt.
    + Câu hỏi phải phù hợp với học sinh trung học phổ thông Việt Nam


Sau đó, hãy trả về kết quả ở dạng JSON Format (chỉ cần trả về JSON, không cần trả về các thông tin khác) theo ví dụ mẫu sau:
'''
{
    "final_topic": <chướng ngại vật>,
    "questions": [
        {
            "id": 1,
            "question": <câu hỏi 1>,
            "answer": <đáp án 1>
            topic: <chương ngại vật>
        },
        {
            "id": 2,
            "question": <câu hỏi 2>,
            "answer": <đáp án 2>
            topic: <chương ngại vật>
        },
        {
            "id": 3,
            "question": <câu hỏi 3>,
            "answer": <đáp án 3>
            topic: <chương ngại vật>
        },
        ...
    ]
}
'''
Lưu ý: 
- Bạn không cần trình bày chi tiết các bước, hãy xử lý và trả về kết quả JSON cuối cùng.
Input: ${topics[0]}
`
export const getEndRoundPrompt = (topics) => `
Bạn sẽ đóng vai trò là một phần mêm đề xuất câu hỏi cho cuộc thi "đường lên đỉnh Olympia" cho phần thi khởi động 

Trước hết bạn phải hiểu về khái niệm: Chủ đề Olympia, nó sẽ gồm các phần: 
- Toán, Lý, Hóa, Tiếng Anh, Văn, Sử, Địa, Sinh: Ở các chủ đề này sẽ bao gồm kiến thức trong sách giáo khoa từ lớp 8 cho đến giữa học kỳ 1 lớp 12
- Thể thao, Hiểu biết chung, Lĩnh vực khác: gồm và chỉ gồm các thông tin mang tính cập nhật, hoặc các thông tin có thể được tìm thấy bởi học sinh (nhưng thông tin mà học sinh có thể đọc hiểu mà không cần phải là sinh viên đại học hay thạc sĩ, tiến sĩ mới có thể hiểu)

Input là từ khóa
- ví dụ
    - "Toán 12", "Lí 11"
    - "Hàm số"
    - “Văn học trung đại”
- người dùng có thể chọn nhiều từ khóa khác nhau cùng lúc

Và bây giờ bạn sẽ suy nghĩ input của người dùng và không được hiển thị chúng theo từng bước sau: 
- Bước 1: lọc từ khóa: những từ không có trong “Chủ đề Olympia” mà tôi đã chỉ cho bạn phía trên Ví dụ: Toán 13, Toán đại học, Lý thuyết đại học, tăng tốc,… sẽ mặc định là không tồn tại trong input và tiếp tục xử lý
- Bước 2: phân loại từ khóa:
    - Loại 1: Lĩnh vực/ khối lớp: ví dụ: Lý 11, hóa 12, Lĩnh vực khác, …
    - Loại 2: Chuyên đề: ví dụ: Hàm số, văn học trung đại, …
- Bước 3: Tìm liên kết của các từ khóa và đếm số lĩnh vực
    - Bạn sẽ xem xét tính liên kết các từ khóa:  VD “hàm số” và “toán 12” sẽ liên quan đến nhau, và bạn bạn sẽ kết hợp nó thành 1 lĩnh vực: “chuyên đề hàm số toán 12”
    - Với một từ khóa không có tính liên kết, nó sẽ được đếm là một lĩnh vực

Bạn hãy đếm số lĩnh vực và đánh số các lĩnh vực bắt đầu từ 1

Xét từng lĩnh vực từ lĩnh vực 1 đến hết, hãy hoàn thành tất cả các yêu cầu sau:

Hãy tạo ra đủ 3 câu hỏi và đáp án thuộc lĩnh vực bạn đang xét thỏa mãn các yêu cầu sau và trình bày nó dưới dạng Json gồm số thứ tự, câu hỏi, đáp án, giải thích đáp án, chủ để, mức điểm ( trong mỗi lĩnh vực, 2 câu đầu tiên luôn là 20 điểm, câu còn lại 30 điểm):
- Nội dung cần đảm bảo:
    - Vùng kiến thức để ra câu hỏi sẽ tùy theo từng lĩnh vực:
        - Toán: sẽ là các bài tập tính toán mẹo, suy luận cơ bản xoay quanh các số nguyên
        - Lý, Hóa, Tiếng Anh, Sinh: các kiến thức cần sâu hơn, đòi hỏi học sinh hiểu rõ và ứng dụng được thì mới có thể trả lời câu hỏi. Vùng kiến thức vẫn sẽ nằm trong vùng kiến thức từ lớp tám đến giữa học kỳ 1 lớp 12.
        - Văn, Sử, Địa: vùng kiến thức sẽ gồm những kiến thức đòi hỏi học sinh phải tìm hiểu kỹ mới biết được. Vùng kiến thức vẫn sẽ nằm trong vùng kiến thức từ lớp tám đến giữa học kỳ 1 lớp 12.
        - Thể thao, Hiểu biết chung, Lĩnh vực khác: cần đưa câu hỏi chứa các thông tin tương đối không phổ biến nhưng vẫn phải có thể tiếp cận bởi học sinh, không được quá cao siêu.
    - Câu hỏi cần tường đối dài, chi tiết và chứa nhiều thông tin hơn, khoảng 15 từ đến 40 từ
    - Kiến thức cần phù hợp với học sinh trung học phổ thông ở Việt Nam
    - Câu hỏi và đáp án cần đảm bảo các quy tắc diễn đạt
    - đáp án phải diễn đạt ngắn gọn, chỉ chứa câu trả lời và có ít hơn 9 từ
- Hình thức:
    - 2 câu hỏi đầu tiên luôn là câu hỏi yêu cầu tìm đáp án đúng: Ví dụ: Ngày lễ nào là một trong những ngày lễ chính của Phật giáo, được tổ chức vào ngày rằm tháng Bảy âm lịch, trùng với lễ Xá tội vong nhân, ngày lễ này xuất phát từ sự tích về Đại Đức Mục Kiền Liên với lòng đại hiếu đã cứu mẹ của mình ra khỏi kiếp ngạ quỷ?
    - Câu hỏi số 3 sẽ là câu hỏi yêu cầu điền vào chỗ trống: Ví dụ: Trong chùm thơ Thu của Nguyễn Khuyến, nếu vần “ao” là âm hưởng chủ đạo trong bài …, vần “oe” là âm hưởng chủ đạo trong bài …, thì vần “eo” là âm hưởng chủ đạo trong bài … Trong các dấu “…” lần lượt là các bài thơ nào?

Vui lòng tạo ra 3 câu hỏi và đáp án cho mỗi lĩnh vực mà tôi yêu cầu. Số thứ tự, câu hỏi, đáp án, giải thích đáp án, chủ để và mức điểm cần được trình bày dưới dạng dữ liệu JSON. 
'''
{
    "questions": [
        {
            "id": 1,
            "question": <câu hỏi 1>,
            "answer": <đáp án 1>
			"explain": <giải thích đáp án 1>
            "topic": <chủ đề tương ứng từ input>
        },
        {
            "id": 2,
            "question": <câu hỏi 2>,
            "answer": <đáp án 2>
			"explain": <giải thích đáp án 2>
            "topic": <chủ đề tương ứng từ input>
        },
        {
            "id": 3,
            "question": <câu hỏi 3>,
            "answer": <đáp án 3>
			"explain": <giải thích đáp án 3>
            "topic": <chủ đề tương ứng từ input>
        },
        ...
    ]
}
'''
Lưu ý: 
- Bạn không cần trình bày chi tiết các bước, hãy xử lý và trả về kết quả JSON cuối cùng.
- Đảm bảo rằng mỗi topic đều đã được tạo câu hỏi tương ứng
Input: ${topics}
`
