export const getWarnUpRoutePrompt = (topics) => `
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
[
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
'''
Lưu ý: 
- Bạn không cần trình bày chi tiết các bước, hãy xử lý và trả về kết quả JSON cuối cùng.
- Đảm bảo rằng mỗi topic đều đã được tạo câu hỏi tương ứng
Input: ${topics}
`
