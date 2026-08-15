/* Ngân hàng câu hỏi trắc nghiệm Triết học Mác - Lênin */
const QUIZ_DATA = [
  {
    "id": 1,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Xác định phương án đúng theo quan điểm của triết học duy vật biện chứng:",
    "options": [
      "Chủ nghĩa duy vật thường là thế giới quan của các giai cấp và các lực lượng xã hội tiến bộ.",
      "Chủ nghĩa duy vật luôn có mối liên hệ với khoa học, đề cao lao động trí óc hơn lao động chân tay.",
      "Chủ nghĩa duy vật luôn có mối liên hệ với khoa học, đề cao lao động chân tay hơn lao động trí óc.",
      "Chủ nghĩa duy vật là một sự phát triển phiến diện của một trong những mặt, một trong những khía cạnh của nhận thức."
    ],
    "answer": 0,
    "explanation": "Chủ nghĩa duy vật trong lịch sử thường gắn liền với lợi ích của các giai cấp và lực lượng xã hội tiến bộ, phản ánh tri thức khoa học."
  },
  {
    "id": 2,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Nhiệm vụ của triết học là:",
    "options": [
      "Giải thích thế giới.",
      "Cải tạo thế giới.",
      "Giải thích và cải tạo thế giới.",
      "Là khoa học của các khoa học."
    ],
    "answer": 2,
    "explanation": "Triết học Mác không chỉ dừng lại ở việc giải thích thế giới mà sứ mệnh cốt lõi là cải tạo thế giới."
  },
  {
    "id": 3,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Có quan niệm cho rằng: Thế giới bao gồm trần gian, thiên đường và địa ngục. Theo quan điểm của chủ nghĩa duy vật biện chứng quan niệm đó đúng hay sai:",
    "options": [
      "Đúng.",
      "Sai.",
      "Vừa đúng vừa sai.",
      "Tất cả đều sai."
    ],
    "answer": 1,
    "explanation": "Theo CNDV biện chứng, thế giới vật chất là duy nhất và thống nhất, không có thiên đường hay địa ngục siêu nhiên."
  },
  {
    "id": 4,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Khi giải quyết mặt thứ hai trong vấn đề cơ bản của triết học, những triết gia cho rằng con người không có khả năng nhận thức được thế giới, thì thuộc trường phái triết học:",
    "options": [
      "Chủ nghĩa duy vật.",
      "Chủ nghĩa duy tâm.",
      "Trường phái khả tri.",
      "Trường phái bất khả tri."
    ],
    "answer": 3,
    "explanation": "Thuyết Bất khả tri (Agnosticism) phủ nhận khả năng nhận thức thế giới của con người."
  },
  {
    "id": 5,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Câu nói: “Có thực mới vực được đạo” là quan điểm:",
    "options": [
      "Duy vật.",
      "Duy tâm.",
      "Vừa duy vật vừa duy tâm.",
      "Không nên gọi là duy vật hay duy tâm."
    ],
    "answer": 0,
    "explanation": "Quan niệm dân gian 'Có thực mới vực được đạo' thể hiện tính duy vật tự phát (vật chất quyết định ý thức)."
  },
  {
    "id": 6,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Theo Ăngghen, những phát minh lớn trong khoa học tự nhiên ảnh hưởng tới sự hình thành triết học duy vật biện chứng là:",
    "options": [
      "Định luật bảo toàn và chuyển hóa năng lượng, Thuyết tế bào, Định luật vạn vật hấp dẫn.",
      "Định luật bảo toàn và chuyển hóa năng lượng, Thuyết tế bào, Thuyết tiến hóa của Đácuyn.",
      "Định luật bảo toàn và chuyển hóa năng lượng, Định luật vạn vật hấp dẫn, Thuyết nhật tâm.",
      "Phát hiện ra nguyên tử, Phát hiện ra điện tử, Định luật bảo toàn và chuyển hoá năng lượng."
    ],
    "answer": 1,
    "explanation": "Ba phát minh vĩ đại thế kỷ XIX: Định luật bảo toàn & chuyển hóa năng lượng, Thuyết tế bào và Thuyết tiến hóa của Đác-uyn."
  },
  {
    "id": 7,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "V.I. Lênin bổ sung và phát triển triết học Mác trong hoàn cảnh:",
    "options": [
      "Chủ nghĩa tư bản thế giới chưa ra đời.",
      "Chủ nghĩa tư bản độc quyền ra đời.",
      "Chủ nghĩa tư bản ở giai đoạn tự do cạnh tranh.",
      "Chủ nghĩa tư bản hiện đại."
    ],
    "answer": 1,
    "explanation": "Lênin bảo vệ và phát triển chủ nghĩa Mác trong giai đoạn chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa (độc quyền)."
  },
  {
    "id": 8,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Nhận xét nào sau đây là sai:",
    "options": [
      "Phương pháp siêu hình nhận thức đối tượng ở trạng thái tĩnh, đồng nhất đối tượng với trạng thái tĩnh nhất thời đó.",
      "Phương pháp siêu hình chỉ nhìn thấy những sự vật riêng biệt mà không nhìn thấy mối liên hệ qua lại giữa những sự vật ấy, chỉ nhìn thấy cây mà không thấy rừng.",
      "Phương pháp siêu hình có công lớn trong việc giải quyết các vấn đề có liên quan đến cơ học cổ điển.",
      "Phương pháp siêu hình không có vai trò gì trong sự phát triển của triết học và do đó đã được thay thế bằng phương pháp biện chứng."
    ],
    "answer": 3,
    "explanation": "Phương pháp siêu hình có vai trò lịch sử to lớn trong sự phát triển của khoa học tự nhiên (đặc biệt cơ học cổ điển thế kỷ 17-18)."
  },
  {
    "id": 9,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Chủ nghĩa duy vật chất phác là kết quả nhận thức của các nhà triết học thời kỳ:",
    "options": [
      "Cổ đại.",
      "Trung cổ.",
      "Phục hưng.",
      "Khai sáng."
    ],
    "answer": 0,
    "explanation": "Chủ nghĩa duy vật chất phác ngây thơ xuất hiện ở thời kỳ Cổ đại (đồng nhất vật chất với nước, lửa, không khí, nguyên tử...)."
  },
  {
    "id": 10,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học ra đời vào khoảng thời gian là:",
    "options": [
      "Từ thế kỷ VIII - VI trước công nguyên.",
      "Thế kỷ III trước công nguyên.",
      "Thế kỷ thứ II trước công nguyên.",
      "Thế kỷ thứ I sau công nguyên."
    ],
    "answer": 0,
    "explanation": "Triết học xuất hiện từ khoảng thế kỷ VIII đến thế kỷ VI trước Công nguyên tại các trung tâm văn minh cổ đại (Ấn Độ, Trung Quốc, Hy Lạp)."
  },
  {
    "id": 11,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học là:",
    "options": [
      "là hệ thống tri thức lý luận chung nhất của con người về thế giới và vị trí của con người trong thế giới.",
      "là khoa học nghiên cứu về khả năng tư duy của con người.",
      "là khoa học về chính trị.",
      "là khoa học nghiên cứu về đấu tranh giai cấp và cách mạnh xã hội."
    ],
    "answer": 0,
    "explanation": "Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới và vị trí của con người trong thế giới."
  },
  {
    "id": 12,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học Mác ra đời trong điều kiện kinh tế - xã hội:",
    "options": [
      "Phương thức sản xuất tư bản chủ nghĩa đã trở thành phương thức sản xuất thống trị.",
      "Phương thức sản xuất tư bản chủ nghĩa mới xuất hiện.",
      "Chủ nghĩa tư bản đã trở thành chủ nghĩa đế quốc.",
      "Chủ nghĩa tư bản đã ở giai đoạn chủ nghĩa tư bản độc quyền nhà nước."
    ],
    "answer": 0,
    "explanation": "Vào những năm 40 của thế kỷ XIX, CNTB phát triển mạnh mẽ và PTSX tư bản chủ nghĩa đã trở thành thống trị ở Tây Âu."
  },
  {
    "id": 13,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học Mác - Lênin có chức năng:",
    "options": [
      "Chức năng thế giới quan và phương pháp luận.",
      "Chức năng hoàn thiện lý trí và nâng cao phẩm chất đạo đức cách mạng.",
      "Chức năng khoa học của mọi khoa học.",
      "Chức năng chỉ đạo mọi hoạt động thực tiễn."
    ],
    "answer": 0,
    "explanation": "Triết học Mác - Lênin có hai chức năng cơ bản là chức năng thế giới quan và chức năng phương pháp luận chung nhất."
  },
  {
    "id": 14,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Nguồn gốc lý luận của Triết học Mác là:",
    "options": [
      "Triết học cổ điển Đức.",
      "Kinh tế chính trị hiện đại.",
      "Chủ nghĩa xã hội.",
      "Phép biện chứng tự phát."
    ],
    "answer": 0,
    "explanation": "Tiền đề lý luận trực tiếp của Triết học Mác là Triết học cổ điển Đức (tiêu biểu là Hêghen và Phoi-ơ-bắc)."
  },
  {
    "id": 15,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Chủ nghĩa duy vật và chủ nghĩa duy tâm đối lập nhau về phương diện:",
    "options": [
      "Bản thể luận.",
      "Nhận thức luận.",
      "Nhân sinh quan.",
      "Phương pháp luận."
    ],
    "answer": 0,
    "explanation": "Vấn đề bản thể luận (vật chất hay ý thức có trước) là căn cứ phân định CNDV và CNDT."
  },
  {
    "id": 16,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Phương pháp tư duy coi nguyên nhân của sự biến đổi nằm ngoài đối tượng là:",
    "options": [
      "Phương pháp tư duy biện chứng.",
      "Phương pháp tư duy trừu tượng hóa.",
      "Phương pháp tư duy logic-lịch sử.",
      "Phương pháp tư duy siêu hình."
    ],
    "answer": 3,
    "explanation": "Phương pháp siêu hình coi nguyên nhân biến đổi là do lực đẩy từ bên ngoài; ngược lại phép biện chứng tìm nguyên nhân từ mâu thuẫn nội tại bên trong."
  },
  {
    "id": 17,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Sự khác nhau giữa chủ nghĩa duy vật và chủ nghĩa duy tâm khi giải quyết mặt thứ hai của vấn đề cơ bản của triết học là:",
    "options": [
      "Chủ nghĩa duy vật cho rằng nhận thức là nhận thức của con người về thế giới. Chủ nghĩa duy tâm cho rằng nhận thức là ý thức tự nhận thức về chính bản thân mình.",
      "Chủ nghĩa duy vật cho rằng con người có khả năng nhận thức về thế giới. Chủ nghĩa duy tâm cho rằng con người không có khả năng nhận thức thế giới.",
      "Chủ nghĩa duy vật cho rằng chỉ có một thế giới duy nhất tồn tại là thế giới vật chất. Chủ nghĩa duy tâm cho rằng chỉ có ý thức tồn tại, sinh ra vật chất.",
      "Chủ nghĩa duy vật cho rằng vật chất có trước, vật chất quyết định ý thức. Chủ nghĩa duy tâm cho rằng ý thức có trước, ý thức quyết định vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 18,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Vấn đề quan hệ giữa vật chất và ý thức là vấn đề cơ bản của triết học, vì:",
    "options": [
      "Vì nó tồn tại trong suốt lịch sử triết học; khi giải quyết nó mới có thể giải quyết được các vấn đề khác, đồng thời cách giải quyết nó chi phối cách giải quyết các vấn đề còn lại.",
      "Vì nó tồn tại trong suốt lịch sử triết học; khi giải quyết nó mới có thể giải quyết được các vấn đề khác, đồng thời cách giải quyết nó chi phối cách giải quyết.",
      "Vì nó tồn tại trong suốt lịch sử triết học; khi giải quyết nó mới có thể giải quyết được các vấn đề khác; là vấn đề được nhiều nhà triết học quan tâm khi tìm hiểu thế giới.",
      "Vì qua giải quyết vấn đề này sẽ phân định được chủ nghĩa duy tâm và chủ nghĩa duy vật; nó được các nhà triết học đưa ra và thừa nhận như vậy."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 19,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Sắp xếp theo trình tự xuất hiện từ sớm nhất đến muộn nhất các hình thức thế giới quan sau:",
    "options": [
      "Triết học - tôn giáo - thần thoại.",
      "Thần thoại - tôn giáo - triết học.",
      "Thần thoại - triết học - tôn giáo.",
      "Tôn giáo - thần thoại - triết học."
    ],
    "answer": 1,
    "explanation": "Lịch sử tiến hóa thế giới quan của loài người: Thế giới quan Thần thoại -> Tôn giáo -> Triết học."
  },
  {
    "id": 20,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học ra đời do:",
    "options": [
      "Từ sự vận động của ý muốn chủ quan của con người.",
      "Từ thực tiễn, do nhu cầu của thực tiễn.",
      "Từ sự suy tư của con người về bản thân mình.",
      "Từ sự sáng tạo của nhà tư tưởng."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 21,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học nghiên cứu thế giới:",
    "options": [
      "Như một đối tượng vật chất cụ thể.",
      "Như một hệ đối tượng vật chất nhất định.",
      "Như một chỉnh thể thống nhất.",
      "Như một thực thể tồn tại cụ thể."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 22,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Hình thức nào của chủ nghĩa duy vật đã không còn đồng nhất vật chất với những dạng cụ thể của vật chất, và nó đã xác định rõ vật chất là thực tại khách quan:",
    "options": [
      "Chủ nghĩa duy vật chất phác thời cổ đại.",
      "Chủ nghĩa duy vật siêu hình.",
      "Chủ nghĩa duy vật biện chứng.",
      "Chủ nghĩa duy vật nói chung."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 23,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Các phạm trù: vật chất, ý thức, vận động, bản chất, hiện tượng là những phạm trù của khoa học của:",
    "options": [
      "Triết học.",
      "Sinh học.",
      "Hoá học.",
      "Vật lý."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 24,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Quan điểm “Vừa thấy cây vừa thấy rừng” thuộc về phương pháp nhận thức:",
    "options": [
      "Phương pháp biện chứng.",
      "Phương pháp siêu hình.",
      "Phương pháp tư duy trừu tượng.",
      "Phương pháp logic - lịch sử."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 25,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Quan điểm cho rằng: “Vẻ đẹp không nằm ở đôi má hồng của người thiếu nữ mà ở trong đôi mắt của kẻ si tình”, thuộc trường phái triết học:",
    "options": [
      "Duy tâm khách quan.",
      "Duy tâm chủ quan.",
      "Chủ nghĩa duy lý.",
      "Duy vật tự phát."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 26,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Chủ nghĩa duy tâm có hai hình thức cơ bản là:",
    "options": [
      "Chủ nghĩa duy tâm tuyệt đối và chủ nghĩa duy tâm tương đối",
      "Chủ nghĩa duy tâm cảm tính và chủ nghĩa duy tâm lý tính.",
      "Chủ nghĩa duy tâm chủ quan và chủ nghĩa duy tâm khách quan.",
      "Chủ nghĩa duy tâm nhất nguyên và chủ nghĩa duy tâm nhị nguyên."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 27,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Theo triết học Mác- Lênin, biện chứng bao gồm:",
    "options": [
      "Biện chứng khách quan và biện chứng chủ quan.",
      "Biện chứng tự nhiên và biện chứng xã hội.",
      "Biện chứng duy tâm và biện chứng duy vật.",
      "Biện chứng vật chất và biện chứng ý thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 28,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Chủ nghĩa duy vật phát triển qua các hình thức:",
    "options": [
      "Chủ nghĩa duy vật cổ đại, chủ nghĩa duy vật siêu hình, chủ nghĩa duy vật máy móc.",
      "Chủ nghĩa duy vật cổ đại, chủ nghĩa duy vật siêu hình, chủ nghĩa duy vật biện chứng.",
      "Chủ nghĩa duy vật nhân bản, chủ nghĩa duy vật siêu hình, chủ nghĩa duy vật biện chứng.",
      "Chủ nghĩa duy vật siêu hình, chủ nghĩa duy vật biện chứng."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 29,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Vấn đề cơ bản của triết học là:",
    "options": [
      "Vấn đề mối quan hệ giữa Trời và Đất, người và vật.",
      "Vấn đề mối quan hệ giữa vật chất và ý thức.",
      "Vấn đề mối quan hệ giữa tri thức và tình cảm.",
      "Vấn đề mối quan hệ giữa vật chất và vật thể"
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 30,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Vấn đề cơ bản của triết học có hai mặt là:",
    "options": [
      "Giữa tự nhiên và xã hội: cái nào có trước, cái nào có sau; cái nào quyết định cái nào; Và con người có nhận thức được xã hội không?",
      "Giữa ý thức và vật chất: cái nào có trước cái nào có sau; cái nào quyết định cái nào; Và con người có khả năng nhân thức được thế giới không?",
      "Giữa ý thức và vật thể: cái nào có trước cái nào có sau? cái nào quyết định cái nao?; Và con người có nhận biết được các vật thể không?",
      "Giữa vật chất và ý thức: cái nào có trước, cái nào có sau? cái nào lệ thuộc cái nào?; Và con người có khả năng nhận biết được chính mình không?"
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 31,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học Mác ra đời vào khoảng thời gian là:",
    "options": [
      "Những năm 40 thế kỷ XIX.",
      "Những năm 40 thế kỷ XVIII.",
      "Những năm 40 thế kỷ XVII.",
      "Những năm 40 thế kỷ XVI."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 32,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Những tiền đề lý luận dẫn đến sự ra đời của triết học Mác:",
    "options": [
      "Triết học cổ điển Đức, Kinh tế Chính trị và Chủ nghĩa Xã hội không tưởng Pháp.",
      "Triết học hiện sinh, Kinh tế chính trị và Chủ nghĩa xã hội không tưởng Pháp.",
      "Triết học cổ điển Đức, Kinh tế Chính trị học cổ điển Anh và Chủ nghĩa Xã hội không tưởng ở Pháp.",
      "Triết học cổ điển Đức, Kinh tế Chính trị và Chủ nghĩa Xã hội không tưởng."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 33,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Những tiền đề khoa học tự nhiên dẫn đến sự ra đời của triết học Mác:",
    "options": [
      "Học thuyết tế bào, học thuyết tiến hóa, học thuyết giá trị thặng dư.",
      "Học thuyết tế bào, học thuyết tiến hóa, định luật bảo toàn và chuyển hóa năng lượng.",
      "Học thuyết tế bào, học thuyết tiến hóa, học thuyết đấu tranh giai cấp.",
      "Định luật bảo toàn và chuyển hóa năng lượng, học thuyết tiến hóa, học thuyết giá trị thặng dư."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 34,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Các nhà triết học thuộc trường phái chủ nghĩa duy vật cho rằng:",
    "options": [
      "Bản chất của thế giới là ý thức.",
      "Bản chất của thế giới là các vật thể.",
      "Bản chất của thế giới là vật chất.",
      "Bản chất của thế giới là ý niệm"
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 35,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Các hình thức cơ bản của phép biện chứng là:",
    "options": [
      "Phép biện chứng chất phác thời cổ đại; phép biện chứng duy tâm cổ điển Đức và phép biện chứng duy vật tầm thường.",
      "Phép biện chứng chất phác thời cổ đại; phép biện chứng duy tâm cổ điển Đức và phép biện chứng duy vật của chủ nghĩa Mác – Lênin.",
      "Phép biện chứng chất phác thời cổ đại; phép biện chứng duy vật của chủ nghĩa Mác - Lênin và phép biện chứng duy tâm thời trung cổ.",
      "Phép biện chứng duy tâm cổ điển Đức; phép biện chứng duy vật của chủ nghĩa Mác - Lênin và phép biện chứng chủ nghĩa xã hội không tưởng."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 36,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Về mặt triết học, định luật bảo toàn và chuyển hoá năng lượng chứng minh cho quan điểm:",
    "options": [
      "Quan điểm siêu hình phủ nhận sự vận động, phát triển của thế giới vật chất",
      "Quan điểm duy tâm phủ nhận sự vận động là khách quan của thế giới vật chất",
      "Quan điểm biện chứng duy vật thừa nhận sự chuyển hoá lẫn nhau của giới tự nhiên vô cơ.",
      "Quan điểm biện chứng duy vật thừa nhận thế giới không có sự chuyển hóa của giới tự nhiên vô cơ."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 37,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Thực chất bước chuyển cách mạng trong triết học do Mác và Ăngghen thực hiện là:",
    "options": [
      "Thống nhất giữa thế giới quan duy vật và phép biện chứng trong một hệ thống triết học.",
      "Thống nhất giữa triết học của Hêghen và triết học của Phoi-ơ-bắc.",
      "Phê phán chủ nghĩa duy vật siêu hình của Phoi-ơ-bắc.",
      "Phê phán triết học duy tâm của Hêghen."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 38,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Ba phát minh trong khoa học tự nhiên: định luật bảo toàn và chuyển hoá năng lượng, học thuyết tế bào, học thuyết tiến hoá chứng minh thế giới vật chất có tính chất:",
    "options": [
      "Tính chất tách rời tĩnh tại của thế giới vật chất.",
      "Tính chất biện chứng của sự vận động và phát triển của thế giới vật chất.",
      "Tính chất không tồn tại thực của thế giới vật chất.",
      "Tính chất vô tận của thế giới vật chất."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 39,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Tác phẩm được coi là “văn kiện có tính chất cương lĩnh đầu tiên của chủ nghĩa Mác” là tác phẩm:",
    "options": [
      "Sự khốn cùng của triết học.",
      "Gia đình thần thánh.",
      "Tuyên ngôn của Đảng Cộng sản.",
      "Tư bản"
    ],
    "answer": 2,
    "explanation": "'Tuyên ngôn của Đảng Cộng sản' (1848) là tác phẩm đánh dấu sự ra đời và là văn kiện cương lĩnh đầu tiên của chủ nghĩa Mác."
  },
  {
    "id": 40,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Đối tượng nghiên cứu của triết học là:",
    "options": [
      "Những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
      "Những quy luật vận động của tự nhiên, xã hội.",
      "Những quy luật hình thành của xã hội và tư duy.",
      "Những quy luật vận động, phát triển của tự nhiên, xã hội và tư duy."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 41,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Vai trò của Triết học Mác-Lênin trong sự nghiệp đổi mới ở Việt Nam hiện nay là:",
    "options": [
      "Là thế giới quan, phương pháp luận khoa học cho đổi mới tư duy lý luận, xác định mô hình chủ nghĩa xã hội.",
      "Là công cụ để cải tạo xã hội cũ.",
      "Là kim chỉ nam cho mọi hoạt động thực tiễn của Đảng, Nhà nước và toàn thể nhân dân.",
      "Là phương pháp luận cho việc xây dựng mô hình xã hội mới."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 42,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Thế giới quan và phương pháp luận mà triết học Mác – Lênin trang bị cho con người tính chất cơ bản:",
    "options": [
      "Tính sáng tạo và tiến bộ.",
      "Tính cách mạng và khoa học.",
      "Tính kế thừa và cụ thể.",
      "Tính lịch sử và tính đảng."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 43,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học đóng vai trò là:",
    "options": [
      "Toàn bộ thế giới quan.",
      "Toàn bộ thế giới quan, nhân sinh quan và phương pháp luận.",
      "Hạt nhân lý luận của thế giới quan.",
      "Một loại hình thế giới quan giống như các loại hình thế giới quan khác."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 44,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Trong các trả lời sau đây, câu nào diễn đạt chưa chuẩn xác:",
    "options": [
      "Chủ nghĩa Mác là học thuyết do C.Mác sáng lập.",
      "Chủ nghĩa Mác là học thuyết về sự nghiệp giải phóng giai cấp vô sản và nhân dân lao động.",
      "Chủ nghĩa Mác là khoa học của mọi khoa học, là thế giới quan và phương pháp luận chung của mọi nhận thức và thực tiễn.",
      "Chủ nghĩa Mác là học thuyết được xây dựng trên cơ sở kế thừa những tinh hoa của lịch sử tư tưởng nhân loại và thực tiễn cách mạng."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 45,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Thực chất bước chuyển cách mạng trong triết học do C.Mác và Ph.Ăngghen thực hiện là:",
    "options": [
      "Thống nhất phép biện chứng và thế giới quan duy vật trong một hệ thống triết học; xây dựng được chủ nghĩa duy vật lịch sử.",
      "Thống nhất phép siêu hình và thế giới quan duy vật trong một hệ thống triết học; xây dựng được chủ nghĩa duy vật lịch sử.",
      "Thống nhất phép siêu hình và thế giới quan duy tâm trong một hệ thống triết học; xây dựng được chủ nghĩa duy vật lịch sử.",
      "Thống nhất phép siêu hình và thế giới quan duy tâm trong một hệ thống triết học; phát hiện sứ mệnh lịch sử của giai cấp công nhân."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 46,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Cống hiến vĩ đại nhất của C.Mác về triết học là:",
    "options": [
      "Chủ nghĩa duy vật biện chứng.",
      "Chủ nghĩa duy vật lịch sử.",
      "Coi thực tiễn là trung tâm.",
      "Phép biện chứng duy vật."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 47,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Triết học duy tâm có vai trò:",
    "options": [
      "Chẳng những không đóng góp mà còn làm suy đồi tư duy nhân loại.",
      "Không đóng góp cho sự phát triển tư duy con người.",
      "Kiềm hãm phát triển tư duy con người, xã hội.",
      "Đóng góp cho sự phát triển tư duy con người, xã hội"
    ],
    "answer": 3,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 48,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Hạn chế lớn nhất của các quan niệm duy vật ở phương Tây thời cổ đại là:",
    "options": [
      "Tính tự phát, ngây thơ.",
      "Tính siêu hình.",
      "Tính chủ quan.",
      "Tính tư biện."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 49,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Hạn chế lớn nhất của các quan niệm duy vật ở phương Tây vào thế kỷ 17-18 là:",
    "options": [
      "Tính tự phát, ngây thơ.",
      "Tính siêu hình.",
      "Tính chủ quan.",
      "Tính nguỵ biện."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 50,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Tác phẩm được xem là văn kiện có tính chất cương lĩnh đầu tiên của chủ nghĩa Mác là:",
    "options": [
      "Bản thảo kinh tế - triết học năm 1844",
      "Tuyên ngôn của Đảng Cộng sản.",
      "Tuyên ngôn độc lập.",
      "Hệ tư tưởng Đức."
    ],
    "answer": 1,
    "explanation": "'Tuyên ngôn của Đảng Cộng sản' (1848) là tác phẩm đánh dấu sự ra đời và là văn kiện cương lĩnh đầu tiên của chủ nghĩa Mác."
  },
  {
    "id": 51,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Xét về lịch sử hình thành và giá trị tư tưởng thì chủ nghĩa Ph.Ăngghen ở giai đoạn 1844 - 1848 nhằm mục đích là:",
    "options": [
      "Tiếp tục hoàn thành các tác phẩm triết học nhằm phê phán tôn giáo.",
      "Hình thành những nguyên lý triết học duy vật biện chứng, duy vật lịch sử và chủ nghĩa xã hội khoa học.",
      "Nghiên cứu về vai trò của hoạt động thực tiễn đối với nhận thức.",
      "Hoàn thành bộ “Tư Bản”."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 52,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Các nhà triết học thuộc trường phái chủ nghĩa duy tâm cho rằng:",
    "options": [
      "Bản chất của thế giới là nguyên tử.",
      "Bản chất của thế giới là những vật thể.",
      "Bản chất của thế giới là ý thức.",
      "Bản chất của thế giới là vật chất."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 53,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Chủ nghĩa duy vật có phương pháp nhìn thế giới như một cổ máy khổng lồ mà mỗi bộ phận tạo nên thế giới đó về cơ bản là ở trạng thái biệt lập và tĩnh tại là:",
    "options": [
      "Chủ nghĩa duy vật chất phác thời cổ đại.",
      "Chủ nghĩa duy vật siêu hình.",
      "Chủ nghĩa duy vật biện chứng.",
      "Chủ nghĩa duy vật nói chung."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 54,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Nguồn gốc dẫn đến sự ra đời của triết học:",
    "options": [
      "Xã hội phân chia thành giai cấp.",
      "Khi xuất hiện tầng lớp trí thức biết ngạc nhiên, hoài nghi, hụt hẫng.",
      "Tư duy của con người đạt trình độ khái quát cao và xuất hiện tầng lớp trí thức.",
      "Khi con người biết ngạc nhiên, hoài nghi, hụt hẫng."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 55,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Đối tượng của triết học là:",
    "options": [
      "Nghiên cứu những quy luật của khoa học cụ thể.",
      "Nghiên cứu những quy luật của tự nhiên, xã hội và tư duy con người.",
      "Nghiên cứu những hiện tượng xảy ra trong tự nhiên, xã hội và tư duy.",
      "Nghiên cứu những vấn đề chung nhất của tự nhiên, của xã hội và con người."
    ],
    "answer": 3,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 56,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Vấn đề cơ bản của triết học là:",
    "options": [
      "Giữa tự nhiên và xã hội: cái nào có trước, cái nào có sau; cái nào quyết định cái nào; Và con người có nhận thức được xã hội không?",
      "Giữa ý thức và vật chất: cái nào có trước cái nào có sau; cái nào quyết định cái nào; Và con người có khả năng nhân thức được thế giới không?",
      "Giữa ý thức và vật thể: cái nào có trước cái nào có sau? cái nào quyết định cái nao?; Và con người có nhận biết được các vật thể không?",
      "Giữa vật chất và ý thức: cái nào có trước, cái nào có sau? cái nào lệ thuộc cái nào?; Và con người có khả năng nhận biết được chính mình không?"
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 57,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Cơ sở phân chia các trường phái triết học: chủ nghĩa duy vật và chủ nghĩa duy tâm là:",
    "options": [
      "Quan niệm về thế giới.",
      "Giải quyết vấn đề vật chất và thế giới.",
      "Giải quyết vấn đề cơ bản của triết học.",
      "Quan niệm về con người trong thế giới."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 58,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Các nhà triết học thuộc trường phái chủ nghĩa duy vật cho rằng:",
    "options": [
      "Bản chất của thế giới là vật chất; vật chất là tính thứ nhất; vật thể là tính thứ hai; vật thể là cái có trước và quyết định ý thức của con người.",
      "Bản chất của thế giới là các vật thể; Vật thể là tính thứ nhất, ý thức là tính thứ hai; vật thể là cái có trước và cấu thành ý thức của con người.",
      "Bản chất của thế giới là vật chất; vật chất là tính thứ nhất, ý thức là tính thứ hai; vật chất là cái có trước và quyết định ý thức của con người.",
      "Bản chất của thế giới là ý thức; ý thức là cái có trước và quyết định, vất chất là cái có sau và bị quyết định."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 59,
    "chapter": "Bài 1: Triết học & Triết học Mác - Lênin",
    "tag": "",
    "question": "Các nhà triết học thuộc trường phái chủ nghĩa duy tâm cho rằng:",
    "options": [
      "Bản chất của thế giới là vật chất tạo nên ý thức và là tính thứ nhất còn ý thức tạo nên con người và là tính thứ hai.",
      "Bản chất của thế giới là những vật thể; Vật thể là tính thứ nhất, ý thức là tính thứ hai; vật chất là cái có trước và quyết định ý thức của con người.",
      "Bản chất của thế giới là ý thức, ý thức là tính thứ nhất, vật chất là tính thứ hai; ý thức là cái có trước và quyết định vật chất.",
      "Bản chất của thế giới là vật chất, tạo nên các vật thể là tính thứ hai; vật thể là cái có trước và quyết định vật chất."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 60,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo Lênin những phát minh về khoa học tự nhiên cuối thế kỷ XIX đầu thế kỷ XX đã làm tiêu tan:",
    "options": [
      "Tiêu tan vật chất nói chung, quan điểm siêu hình về vật chất.",
      "Tiêu tan dạng tồn tại cụ thể của vật chất, quan điểm siêu hình về vật chất.",
      "Tiêu tan giới hạn hiểu biết trước đây về vật chất, quan điểm siêu hình về vật chất.",
      "Tiêu tan quan niệm cho rằng vật chất là nguyên tử, quan điểm siêu hình về vật chất."
    ],
    "answer": 3,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 61,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan điểm nào sau đây là sai với quan niệm về vật chất trong triết học Mác-Lênin:",
    "options": [
      "Vật chất là cái tồn tại khách quan bên ngoài ý thức và không phụ thuộc và ý thức.",
      "Vật chất là cái gây nên cảm giác ở con người một cách trực tiếp hoặc gián tiếp.",
      "Vật chất nói chung tồn tại tách rời với các dạng tồn tại cụ thể của vật chất.",
      "Ý thức con người là sự phản ánh đối với vật chất, còn vật chất là cái được ý thức phản ánh."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 62,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Thuộc tính đặc trưng của vật chất theo quan niệm của triết học Mác - Lênin là:",
    "options": [
      "Là phạm trù triết học.",
      "Là tồn tại khách quan, độc lập với ý thức con người.",
      "Là tất cả những gì đem lại cho con người cảm giác.",
      "Là toàn bộ thế giới khách quan."
    ],
    "answer": 2,
    "explanation": "Theo định nghĩa của Lênin, thuộc tính quan trọng và đặc trưng nhất của vật chất là 'tồn tại khách quan' độc lập với ý thức."
  },
  {
    "id": 63,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cái bàn, cái cơm, áo, gạo, tiền, nước, lửa, không khí… đều là:",
    "options": [
      "Những dạng tồn tại khác nhau của vật chất.",
      "Vật chất.",
      "Những vật dụng trong cuộc sống hàng ngày.",
      "Những khái niệm do con người sáng tạo ra trong quá trình sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 64,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan niệm của triết học Mác - Lênin, đáp án nào sau đây là sai:",
    "options": [
      "Vận động là phương thức tồn tại của vật chất.",
      "Vận động là thuộc tính cố hữu của vật chất.",
      "Vận động của vật chất là sự tự vận động.",
      "Vận động của vật chất là do sự tác động từ các yếu tố bên ngoài."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 65,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Trường phái triết học cho rằng: không thể có vật chất không vận động và không thể có vận động ngoài vật chất là:",
    "options": [
      "Chủ nghĩa duy vật tự phát thời cổ đại.",
      "Chủ nghĩa duy vật siêu hình.",
      "Chủ nghĩa duy vật biện chứng.",
      "Chủ nghĩa duy tâm."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 66,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan niệm của chủ nghĩa duy vật biện chứng, thế giới thống nhất ở:",
    "options": [
      "Tính vật chất.",
      "Tính khách quan.",
      "Tính hiện thực.",
      "Tính độc lập."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 67,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Để phản ánh khái quát hiện thực khách quan và trao đổi tư tưởng con người cần có:",
    "options": [
      "Công cụ lao động.",
      "Thị giác.",
      "Bộ óc.",
      "Ngôn ngữ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 68,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Tìm đáp án sai theo quan điểm của chủ nghĩa duy vật biện chứng:",
    "options": [
      "Phản ánh là thuộc tính của mọi dạng vật chất.",
      "Ý thức là hình thức phản ánh chỉ có ở con người.",
      "Thuộc tính phản ánh cũng phát triển từ thấp đến cao, từ đơn giản đến phức tạp.",
      "Ý thức là thuộc tính của một dạng vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 69,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan niệm của chủ nghĩa duy vật biện chứng, ý thức tác động đến đời sống hiện thực, thể hiện:",
    "options": [
      "Ý thức tự nó có thể làm thay đổi được hiện thực.",
      "Ý thức tác động đến hiện thực thông qua hoạt động thực tiễn.",
      "Ý thức tác động đến hiện thực thông qua hoạt động lý luận.",
      "Ý thức sáng tạo ra toàn bộ hiện thực."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 70,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Yếu tố quan trọng nhất trong kết cấu của ý thức:",
    "options": [
      "Ý chí.",
      "Niềm tin.",
      "Tính cảm.",
      "Tri thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 71,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Xác định câu trả lời đúng theo quan điểm của triết học duy vật biện chứng:",
    "options": [
      "Ý chí là yếu tố quan trọng nhất trong kết cấu của ý thức.",
      "Ý thức có nguồn gốc tự nhiên và nguồn gốc xã hội.",
      "Tình cảm là yếu tố quan trọng nhất trong kết cấu của ý thức.",
      "Ý thức chỉ đạo mọi hành vi của con người."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 72,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Chọn câu trả lời đúng theo quan điểm của triết học Mác-Lênin:",
    "options": [
      "Ý thức có nguồn gốc từ một dạng vật chất giống như gan tiết ra mật.",
      "Ý thức là hiện tượng bẩm sinh ở con người.",
      "Ý thức được hình thành trực tiếp từ lao động.",
      "Ý thức là quá trình tiến hóa cao của giới tự nhiên."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 73,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Bản chất của ý thức là:",
    "options": [
      "Là sự hồi tưởng lại kiếp trước.",
      "Là sự mách bảo của thượng đế.",
      "Là sự phản ánh hiện thực khách quan vào đầu óc con người một cách năng động và sáng tạo.",
      "Là sự phản ánh nguyên vẹn cái bên ngoài."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 74,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm của chủ nghĩa Mác-Lênin:",
    "options": [
      "Vật chất quyết định nội dung, bản chất và sự vận động, phát triển của ý thức.",
      "Vật chất chỉ quyết định nội dung của ý thức, không quyết định sự vận động, phát triển của ý thức.",
      "Vật chất quyết định sự vật động và bản chất của thức, không quyết định nội dung của ý thức.",
      "Vật chất chỉ quyết định bản chất của ý thức, không quyết định sự vận động của ý thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 75,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Trong hoạt động thực tiễn của mình, trước hết con người phải dựa vào:",
    "options": [
      "Vật chất.",
      "Ý thức.",
      "Cả vật chất lẫn ý thức.",
      "Tùy từng trường hợp cụ thể mà có thể là vật chất hoặc ý thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 76,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phạm trù dùng để chỉ thời điểm mà tại đó sự thay đổi về lượng đã đủ để làm thay đổi căn bản chất của sự vật là:",
    "options": [
      "Độ.",
      "Điểm nút.",
      "Bước nhảy.",
      "Chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 77,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phép biện chứng duy vật là:",
    "options": [
      "Phép biện chứng được xác lập trên lập trường của chủ nghĩa duy vật.",
      "Phép biện chứng của ý niệm tuyệt đối.",
      "Phép biện chứng do Ăngghen sáng lập.",
      "Phép biện chứng do V.I. Lênin sáng lập."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 78,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Biện chứng khách quan là:",
    "options": [
      "Là những quan niệm biện chứng tiên nghiệm, có trước kinh nghiệm.",
      "Là biện chứng của bản thân thế giới.",
      "Là biện chứng không thể nhận thức được về nó.",
      "Là biện chứng của ý niệm tuyệt đối."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 79,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cơ sở lý luận của quan điểm: Tôn trọng khách quan là:",
    "options": [
      "Mối quan hệ biện chứng giữa vật chất và ý thức.",
      "Nguyên lý về mối liên hệ phổ biến.",
      "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Quy luật từ những sự biến đổi về lượng dẫn đến biến đổi về chất và ngược lại."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 80,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quy luật được xem là “hạt nhân của phép biện chứng” là:",
    "options": [
      "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Quy luật từ những sự biến đổi về lượng dẫn đến biến đổi về chất và ngược lại.",
      "Quy luật phủ định của phủ định.",
      "Quy luật đấu tranh giai cấp."
    ],
    "answer": 0,
    "explanation": "V.I. Lênin khẳng định: Quy luật thống nhất và đấu tranh của các mặt đối lập là hạt nhân của phép biện chứng duy vật."
  },
  {
    "id": 81,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phạm trù nói lên bước ngoặt của sự thay đổi về lượng đưa đến sự thay đổi về chất là:",
    "options": [
      "Độ.",
      "Điểm nút.",
      "Bước nhảy.",
      "Đột biến."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 82,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Xác định quan niệm sai về nhận thức:",
    "options": [
      "Nhận thức là sự phản ánh hiện thực khách quan vào bộ óc con người một cách năng động, sáng tạo.",
      "Nhận thức chỉ biết được hiện tượng bề ngoài chứ không thể nắm được bản chất bên trong của sự vật.",
      "Nhận thức là hình ảnh chủ quan của thế giới khách quan.",
      "Nhận thức là sự phản ánh hiện thực khách quan vào bộ óc con người thông qua thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 83,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Xác định quan niệm sai về thực tiễn:",
    "options": [
      "Thực tiễn là nguồn gốc của nhận thức.",
      "Thực tiễn là động lực của nhận thức.",
      "Thực tiễn là hoạt động vật chất và tinh thần của con người.",
      "Thực tiễn là tiêu chuẩn của chân lý."
    ],
    "answer": 0,
    "explanation": "Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý."
  },
  {
    "id": 84,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Xác định quan niệm sai về chân lý:",
    "options": [
      "Nội dung của chân lý có tính khách quan.",
      "Chân lý bao giờ cũng cụ thể.",
      "Chân lý là cái đưa lại lợi ích trực tiếp cho con người.",
      "Chân lý không phải bao giờ cũng thuộc về số đông."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 85,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Thực tiễn là:",
    "options": [
      "Hoạt động của con người nhằm cải tạo tự nhiên và xã hội theo nhu cầu của con người ở mỗi giai đoạn lịch sử.",
      "Hoạt động vật chất của con người nhằm cải tạo thế giới.",
      "Hoạt động vật chất.",
      "Hoạt động vật chất của con người nhằm cải tạo tự nhiên và xã hội theo nhu cầu của con người ở mỗi giai đoạn lịch sử."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 86,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan hệ giữa thực tiễn và nhận thức là:",
    "options": [
      "Nhận thức tồn tại độc lập với thực tiễn.",
      "Thực tiễn chỉ là điểm khởi đầu của nhận thức.",
      "Thực tiễn là điểm kết thúc của nhận thức.",
      "Thực tiễn là điểm khởi đầu và cũng là điểm kết thúc của một vòng khâu nhận thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 87,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Chân lý là:",
    "options": [
      "Tri thức đúng và được đa số chấp nhận.",
      "Tri thức phù hợp với thực tế.",
      "Tri thức phù hợp với hiện thực.",
      "Tri thức phù hợp với hiện thực và được thực tiễn kiểm nghiệm."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 88,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Chọn đáp án sai. Thực tiễn có vai trò như thế nào với nhận thức:",
    "options": [
      "Động lực của nhận thức.",
      "Mục đích của nhận thức.",
      "Nhận thức không cần có thực tiễn.",
      "Nguồn gốc của nhận thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 89,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phạm trù nói lên mối liên hệ bản chất, tất nhiên, phổ biến và lặp đi lặp lại giữa các sự vật, hiện tượng hay giữa các nhân tố, các thuộc tính, các mặt trong cùng một sự vật, hiện tượng được gọi là:",
    "options": [
      "Quy luật.",
      "Vân động.",
      "Phát triển.",
      "Mặt đối lập."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 90,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo chủ nghĩa Mác-Lênin, phát triển là:",
    "options": [
      "Khuynh hướng chung của sự vận động của sự vật và hiện tượng.",
      "Sự thay đổi về lượng trong quá trình vận động của vật chất.",
      "Sự thay đổi về chất trong quá trình vận động của vật chất.",
      "Vận động chung của sự vận động của sự vật và hiện tượng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 91,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phạm trù chỉ tính quy định vốn có của sự vật, là sự thống nhất hữu cơ của những thuộc tính, làm cho sự vật là nó chứ không phải cái khác là:",
    "options": [
      "Lượng.",
      "Chất.",
      "Độ.",
      "Điểm nút."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 92,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Trong triết học Mác - Lênin, thuật ngữ “biện chứng” được dùng để chỉ:",
    "options": [
      "Nghệ thuật đàm thoại, tranh luận để đạt tới chân lý.",
      "Mối liên hệ giữa các sự vật, hiện tượng.",
      "Sự vận động của các sự vật, hiện tượng.",
      "Những mối liên hệ, tương tác, chuyển hoá và vận động, phát triển theo quy luật của các sự vật, hiện tượng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 93,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quy luật vạch ra cách thức của sự phát triển là:",
    "options": [
      "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
      "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Quy luật phủ định của phủ định.",
      "Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 94,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học, siêu hình là:",
    "options": [
      "Nhận thức đối tượng ở trạng thái cô lập, tách rời và giữa các mặt đối lập có ranh giới tuyệt đối.",
      "Nhận thức đối tượng trong trạng thái vận động biến đổi, quy định ràng buộc lẫn nhau.",
      "Nhận thức đối tượng trong các mối liên hệ với các đối tượng khác, trong khuynh hướng phát triển của đối tượng.",
      "Nhận thức đối tượng ở trạng thái vận động; là sự biến đổi về lượng dẫn tới sự biến đổi về chất của đối tượng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 95,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học, biện chứng là:",
    "options": [
      "Nhận thức đối tượng ở trạng thái cô lập, tách rời và giữa các mặt đối lập có ranh giới tuyệt đối.",
      "Nhận thức đối tượng trong trạng thái vận động biến đổi, quy định ràng buộc lẫn nhau.",
      "Nhận thức đối tượng trong các mối liên hệ với các đối tượng khác, trong sự tĩnh tại, không vận động.",
      "Nhận thức đối tượng ở trạng thái tĩnh tại; nếu có sự biến đổi thì chỉ là sự biến đổi về số lượng, nguyên nhân của sự biến đổi nằm ở ngoài đối tượng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 96,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quy luật vạch ra nguồn gốc của sự phát triển là:",
    "options": [
      "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
      "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Quy luật phủ định của phủ định.",
      "Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 97,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quy luật vạch ra khuynh hướng, hình thức của sự phát triển là:",
    "options": [
      "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
      "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Quy luật phủ định của phủ định.",
      "Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 98,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phạm trù nói lên sự thống nhất, đấu tranh và chuyển hóa của các mặt đối lập được hiểu là:",
    "options": [
      "Mâu thuẫn biện chứng.",
      "Phủ định biện chứng.",
      "Phát triển.",
      "Vận động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 99,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phát triển theo quan niệm của chủ nghĩa duy vật biện chứng được hiểu là:",
    "options": [
      "Phát triển là sự thay đổi thuần túy về mặt số lượng hay khối lượng của sự vật hiện tượng.",
      "Phát triển là sự thay đổi vị trí của sự vật trong không gian, thời gian.",
      "Phát triển không chỉ là sự thay đổi về số lượng và khối lượng mà còn là sự thay đổi về chất của sự vật hiện tượng.",
      "Phát triển là sự vận động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 100,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Chọn phương án đúng:",
    "options": [
      "Mỗi sự vật chỉ có một chất.",
      "Mỗi sự vật có nhiều chất, thậm chí vô số chất.",
      "Mọi sự biến đổi về lượng đều dẫn đến những biến đổi về chất.",
      "Mọi sự thay đổi đều có thể được coi là bước nhảy."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 101,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là sai:",
    "options": [
      "Chân lý có tính khách quan.",
      "Chân lý có tính tương đối.",
      "Chân lý có tính cụ thể.",
      "Chân lý có tính trừu tượng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 102,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Độ được hiểu là:",
    "options": [
      "Khoảng giới hạn thay đổi về lượng chưa làm thay đổi về chất căn bản của sự vật.",
      "Sự thay đổi về chất của sự vật do sự thay đổi về lượng của sự vật trước đó gây ra.",
      "Thời điểm tại đó diễn ra sự thay đổi về chất của sự vật.",
      "Khoảng giới hạn thay đổi về chất chưa làm thay đổi về lượng của sự vật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 103,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cơ sở lý luận của quan điểm toàn diện là:",
    "options": [
      "Nguyên lý về mối liên hệ phổ biến.",
      "Nguyên lý về sự phát triển.",
      "Quy luật phủ định của phủ định.",
      "Quy luật mâu thuẫn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 104,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Chất của sự vật là:",
    "options": [
      "Cấu trúc của sự vật.",
      "Các thuộc tính của sự vật.",
      "Tổng số các thuộc tính của sự vật.",
      "Sự thống nhất hữu cơ giữa các thuộc tính cơ bản của sự vật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 105,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Đấu tranh giữa các mặt đối lập là:",
    "options": [
      "Tương đối.",
      "Tuyệt đối.",
      "Không có cái gì là tuyệt đối cả.",
      "Chỉ tuyệt đối khi đặt nó trong trường hợp cụ thể."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 106,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm của triết học duy vật biện chứng về phát triển là:",
    "options": [
      "Phát triển của sự vật không có tính kế thừa.",
      "Phát triển của sự vật có tính kế thừa, nhưng đó là sự kế thừa nguyên xi cái cũ hoặc lắp ghép từ cái cũ sang cái mới một cách máy móc về mặt hình thức.",
      "Phát triển của sự vật có tính kế thừa, nhưng trên cơ sở có phê phán, chọn lọc, cải tạo và phát triển.",
      "Phát triển của sự vật có tính kế thừa, nhưng là quá trình bằng phẳng liên tục theo đường thẳng đứng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 107,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Mối quan hệ giữa “sự thống nhất và đấu tranh của các mặt đối lập” là:",
    "options": [
      "Không có “sự thống nhất của các mặt đối lập” thì vẫn có “sự đấu tranh của các mặt đối lập”.",
      "Không có “sự đấu tranh của các mặt đối lập” thì vẫn có “sự thống nhất của các mặt đối lập”.",
      "Sự thống nhất và đấu tranh của các mặt đối lập là không thể tách rời nhau. Không có “sự thống nhất của các mặt đối lập” thì cũng không có “sự đấu tranh của các mặt đối lập”.",
      "Sự đấu tranh của các mặt đối lập vừa tương đối, vừa tuyệt đối."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 108,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan điểm toàn diện yêu cầu:",
    "options": [
      "Phải xem xét một số mối liên hệ của sự vật với các sự vật khác.",
      "Trong các mối liên hệ phải nắm được mối liên hệ cơ bản, không cơ bản, mối liên hệ chủ yếu, thứ yếu…để thúc đẩy sự vật phát triển.",
      "Phải xem xét tất cả các mặt, các mối liên hệ và các khâu trung gian của sự vật, đồng thời phải nắm được và đánh giá đúng vị trí, vai trò của từng mặt, từng mối liên hệ tồn tại trong sự vật.",
      "Phải xem xét sự vật trong từng trường hợp, hoàn cảnh cụ thể."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 109,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Tiêu chuẩn để kiểm tra chân lý là:",
    "options": [
      "Lý thuyết khoa học.",
      "Tri thức của con người.",
      "Thực tiễn.",
      "Dư luận xã hội."
    ],
    "answer": 2,
    "explanation": "Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý."
  },
  {
    "id": 110,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Trong các hình thức của hoạt động thực tiễn, hình thức hoạt động cơ bản của thực tiễn là:",
    "options": [
      "Hoạt động đấu tranh giai cấp.",
      "Hoạt động sản xuất vật chất.",
      "Hoạt động thực nghiệm khoa học.",
      "Hoạt động cải tạo xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 111,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Yếu tố của ý thức thể hiện nguồn động lực bên trong thôi thúc con người vượt qua khó khăn, thử thách gọi là:",
    "options": [
      "Tri thức.",
      "Tình cảm.",
      "Ý chí.",
      "Tiềm thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 112,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Con đường biện chứng của quá trình nhận thức là:",
    "options": [
      "Từ cảm tính đến lý tính, từ lý tính đến hành động.",
      "Từ hành động đến cảm tính, từ cảm tính đến tư duy trừu tượng.",
      "Từ trực quan sinh động đến tư duy trừu tượng, từ tư duy trừu tượng đến hệ thống khái niệm.",
      "Từ trực quan sinh động đến tư duy trừu tượng, từ tư duy trừu tượng đến thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 113,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, mối liên hệ giữa các sự vật có tính chất:",
    "options": [
      "Tính ngẫu nhiên, chủ quan, tính đa dạng và phong phú.",
      "Tính khách quan, tính phổ biến, tính đa dạng và phong phú.",
      "Tính khách quan, tính đặc thù, tính đa dạng và phong phú.",
      "Tính khách quan, tính đa dạng và phong phú."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 114,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Nội dung cơ bản của mối quan hệ biện chứng giữa vật chất và ý thức là:",
    "options": [
      "Vật chất có trước, ý thức có sau, vật chất quyết định ý thức.",
      "Ý thức có trước, vật chất có sau, ý thức quyết định vật chất.",
      "Vật chất có trước, ý thức có sau, vật chất quyết định ý thức, ý thức có thể tác động trở lại vật chất thông qua hoạt động của con người.",
      "Vật chất có trước, ý thức có sau, vật chất quyết định ý thức, ý thức không thể tác động trở lại vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 115,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Vận động là:",
    "options": [
      "Sự chuyển động của các vật thể trong không gian.",
      "Sự chuyển hoá từ trạng thái này sang trạng thái khác của sự vật hiện tượng.",
      "Sự thay đổi vị trí của các sự vật hiện tượng trong không gian, thời gian.",
      "Mọi sự biến đổi nói chung của các sự vật hiện tượng trong không gian và thời gian."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 116,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cơ sở lý luận của quan điểm phát huy tính năng động, sáng tạo là:",
    "options": [
      "Vật chất quyết định thức.",
      "Nguyên lý về mối liên hệ phổ biến.",
      "Ý thức tác động trở lại vật chất.",
      "Quan hệ biện chứng giữa nhận thức và thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 117,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Tri thức của con người ngày càng đầy đủ hơn vì:",
    "options": [
      "Thế giới luôn vận động và ngày càng bộc lộ nhiều thuộc tính của nó.",
      "Do thực tiễn của con người ngày càng trì trệ, lạc hậu.",
      "Thế giới luôn đứng im và ngày không bộc lộ nhiều thuộc tính của nó.",
      "Do trình độ nhận thức lạc hậu hơn thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 118,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cơ sở lý luận của quan điểm lịch sử - cụ thể là:",
    "options": [
      "Nguyên lý vật chất quyết định ý thức.",
      "Nguyên lý về mối liên hệ phổ biến.",
      "Nguyên lý về sự tồn tại khách quan của thế giới vật chất.",
      "Nguyên lý về tính đa dạng, phong phú của thế giới vật chất."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 119,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cơ sở lý luận của quan điểm phát triển là:",
    "options": [
      "Nguyên lý về sự phát triển.",
      "Nguyên lý về mối liên hệ phổ biến.",
      "Nguyên lý về sự tồn tại khách quan của thế giới.",
      "Nguyên lý ý thức tác động đến vật chất."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 120,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cơ sở lý luận của quan điểm thống nhất lý luận và thực tiễn là:",
    "options": [
      "Nguyên lý về sự phát triển.",
      "Nguyên lý về mối liên hệ phổ biến.",
      "Lý luận về mối qun hệ biện chứng giữa vật chất và ý thức.",
      "Lý luận về quan hệ biện chứng giữa nhận thức và thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 121,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Nguyên nhân của sự phát triển là:",
    "options": [
      "Đấu tranh của các mặt đối lập để giải quyết mâu thuẫn.",
      "Sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại.",
      "Quá trình phủ định cái cũ và sự ra đời của cái mới.",
      "Sự phát triển không diễn ra theo quy luật khách quan."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 122,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Các nguyên lý cơ bản của phép biện chứng duy vật là:",
    "options": [
      "Nguyên lý về sự tồn tại khách quan của vật chất.",
      "Nguyên lý về sự vận động và đứng im của các sự vật.",
      "Nguyên lý về mối liên hệ phổ biến và sự phát triển.",
      "Nguyên lý về tính liên tục và tính gián đoạn của thế giới vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 123,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cơ sở lý luận của quan điểm toàn diện là:",
    "options": [
      "Nguyên lý về sự phát triển.",
      "Nguyên lý về mối liên hệ phổ biến.",
      "Nguyên lý về sự tồn tại khách quan của thế giới vật chất.",
      "Nguyên lý về tính đa dạng, phong phú của thế giới vật chất."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 124,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phạm trù chỉ tính quy định khách quan vốn có của sự vật, hiện tượng về quy mô, trình độ, nhịp điệu… của sự vận động, phát triển của sự vật, hiện tượng là:",
    "options": [
      "Lượng.",
      "Chất.",
      "Độ.",
      "Điểm nút."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 125,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phương thức tồn tại của vật chất là:",
    "options": [
      "Tiến hóa.",
      "Phát triển.",
      "Đồng hóa, dị hóa.",
      "Vận động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 126,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Ý nghĩa phương pháp luận của việc nghiên cứu mối quan hệ vật chất – ý thức:",
    "options": [
      "Phải xuất phát từ năng lực, ý chí của minh để xác định mục tiêu, kế hoạch; Đồng thời, Phát huy hiệu quả các nguồn lực vất chất.",
      "Phải xuất phát từ thực tế khách quan, căn cứ vào khả năng, điều kiện vất chất để xây dưng mục tiêu, kế hoach; Đồng thời, phát huy tính năng động chủ quan, ý chí, sáng tạo trong quá trình thực hiện.",
      "Phải xuất phát từ hiện thực khách quan, tôn trọng và căn cứ vào khả năng thực tế để xây dựng mục tiêu, kế hoạch; Đồng thời phát huy hiệu quả điều kiện vất chất hiện có.",
      "Phải xuất phát từ thực tế khách quan và ý chí, nghị lực để xây dựng mục tiêu, kế hoạch; Đồng thời phát huy tinh thần và hiệu quả sử dụng cơ sở vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 127,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Ý nghĩa phương pháp luận của việc nghiên cứu quy luật lượng – chất:",
    "options": [
      "Cần chủ động phát triển về chất để tăng khả năng tích lũy về lương; Đồng thời, hoàn thiện lượng mới, bằng việc cũng cố về chất.",
      "Cần chủ động tích lũy về lượng để cũng cố về chất; Đồng thời, hoàn thiện lượng mới bằng việc khai thác, huy động chất mới.",
      "Cần chủ động tích lũy về lượng để tạo điều kiện phát triển về chất; Đồng thời, hoàn thiện chất mới bằng việc huy động, khai thác các nguồn lực để tích lũy về lượng.",
      "Cần chủ động tích lũy lượng và chất để phát triển; Đồng thời, khai thác, huy động chất mới phù hợp với hoàn cảnh cụ thể."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 128,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Ý nghĩa phương pháp luận của việc nghiên cứu quy luật mâu thuẫn:",
    "options": [
      "Phải nhận thức đúng mâu thuẫn và giải quyết triệt để các mâu thuẫn; Đồng thời, quán triệt quan điểm biện chứng trong xem xet và giải quyết mâu thuẫn cho sự vật phát triển.",
      "Phải phân loại mâu thuẫn, giải quyết kịp thời các mâu thuẫn; Đồng thời, quán triệt quan điểm duy vật lịch sử trong xem xét và giải quyết mâu thuẫn cho sự vật phát triển.",
      "Phải hiểu đúng mâu thuẫn và giải quyết đồng bộ các loại mâu thuẫn; Đồng thơi, quán triệt quan điểm thực tiển trong xem xét và giải quyết mâu thuẫn cho sự vật phát triển.",
      "Phải tôn trọng mâu thuẫn, nhận thức đúng và giải quyết hợp lý các mâu thuẫn; Đồng thời, quán triệt quan điểm toàn diện và lịch sử cụ thể trong xem xét và giải quyết mâu thuẫn cho sự vật phá triển."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 129,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học Mác – Lênin, khẳng định nào sau đây sai:",
    "options": [
      "Thế giới vật chất là vô cùng và vô tận.",
      "Các bộ phận thế giới liên hệ với nhau, chuyển hóa lẫn nhau.",
      "Thế giới thống nhất ở tính vật chất.",
      "Thế giới thống nhất ở ý thức"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 130,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học Mác – Lênin, luận điểm nào sau đây sai:",
    "options": [
      "Sự vật nào cũng là sự thống nhất giữa chất và lượng.",
      "Tính quy định về chất nào của sự vật cũng có tính quy định về lượng tương ứng.",
      "Tính quy định về lượng nói lên mặt thường xuyên biến đổi của sự vật.",
      "Tính quy định về chất không có tính ổn định."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 131,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học Mác – Lênin, luận điểm nào sau đây sai:",
    "options": [
      "CNDV (chủ nghĩa duy vật) thừa nhận nhận thức là sự phản ánh sáng tạo hiện thực khách quan vào trong đầu óc con người dựa trên cơ sở thực tiễn.",
      "CNDV biện chứng thừa nhận nhận thức là quá trình phản ánh sáng tạo hiện thực khách quan vào trong đầu óc con người dựa trên cơ sở thực tiễn.",
      "CNDV thừa nhận nhận thức là sự phản ánh hiện thực khách quan vào đầu óc con người.",
      "CNDV biện chứng thừa nhận nhận thức là quá trình biện chứng xuất phát từ thực tiễn và quay về phục vụ thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 132,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Chủ nghĩa duy vật biện chứng khẳng định:",
    "options": [
      "Bản chất của thế giới là vật chất, tồn tại bởi ý thức, không ngừng phát triển.",
      "Bản chất của thế giới là những vật thể tạo nên, vận động, biến đổi theo quy luật tự nhiên và xã hội.",
      "Bản chất của thế giới là vật chất, tồn tại trong ý thức con người, tùy thuộc vào nhận thức của con người.",
      "Bản chất của thế giới là vật chất, tồn tại khách quan, vĩnh viễn, vô tận, vô hạn."
    ],
    "answer": 3,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 133,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học Mác – Lênin, luận điểm nào sau đây sai:",
    "options": [
      "Nguồn gốc trực tiếp quan trọng nhất quyết định sự ra đời và phát triển của ý thức là lao động, là thực tiễn xã hội.",
      "Ý thức phản ánh hiện thực khách quan vào bộ óc con người thông qua lao động, ngôn ngữ và các quan hệ xã hội.",
      "Ý thức là sản phẩm xã hội, là một hiện tượng xã hội.",
      "Ý thức là hiện tượng cá nhân, vì nó tồn tại trong bộ óc của các con người cụ thể."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 134,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Luận điểm nào sau đây xuất phát từ nội dung quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại:",
    "options": [
      "Khi chất của sự vật có sự thay đổi đến độ nào đó thì lượng của sự vật cũng thay đổi, sự vật mới xuất hiện với chất mới và lượng mới thống nhất với nhau.",
      "Chất của sự vật là cái dễ thay đổi hơn lượng của nó.",
      "Khi lượng của sự vật có sự thay đổi đến một mức độ nào đó thì chất của sự vật mới thay đổi.",
      "Khi lượng của sự vật thay đổi thì chất của sự vật cũng thay đổi theo, sự vật mới xuất hiện với chất mới và lượng mới thống nhất với nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 135,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học Mác – Lênin, bản chất của ý thức là:",
    "options": [
      "Linh hồn.",
      "Hình ảnh chủ quan về thế giới khách quan.",
      "Tổng hợp những cảm giác.",
      "Sự chụp lại thế giới khách quan để có hình ảnh nguyên vẹn về nó."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 136,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Ý nghĩa phương pháp luận của việc nghiên cứu nguyên lý về sự phát triển:",
    "options": [
      "Cần quán triệt quan điểm phát triển trong xem xét, đánh giá các sự vật hiện tượng; Phát triển để thúc đẩy tăng trưởng.",
      "Cần quán triệt quan điểm phát triển trong hoạt động sản xuất vật chất, hoạt động chính trị xã hội và hoạt động thực nghiệm khoa học.",
      "Cần quán triệt quan điểm phát triển trong nhận thức cũng như hoạt động thực tiễn; Tạo môi trường, điều kiện, cơ hội cho mọi đối tượng được phát triển.",
      "Cần quán triệt quan điểm phát triển trong hoạt động sản xuất vật chất cũng như trong tư duy lý luận."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 137,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan hệ biện chứng giữa chân lý và thực tiễn:",
    "options": [
      "Chân lý là tri thức đúng sẽ quy định các mối quan hệ kinh tế - xã hội; Đồng thời, thông qua thực tế xã hội để điều chỉnh chân lý đó.",
      "Chân lý là tri thức đúng sẽ tạo cơ sở cho hoạt động thực tiễn về kinh tế- xã hội; Đồng thời, hoạt động kinh tế- xã hội sẽ làm phong phú thêm chân lý đó.",
      "Chân lý là tri thức đúng sẽ hướng dẫn hoạt động thực tiễn phát triển kinh tế- xã hội; Đồng thời, hoạt động kinh tế- xã hội sẽ kiểm nghiệm và hoàn thiên chân lý đó.",
      "Chân lý là tri thức đúng được bắt nguồn từ ý thức thực tiễn trong đời sống kinh tế- xã hội; Đồng thời, hoạt động kinh tế- xã hội sẽ triển khai cụ thể chân lý đó."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 138,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Ý nghĩa phương pháp luận của việc nghiên cứu mối quan hệ thực tiễn và chân lý:",
    "options": [
      "Hiểu rõ chân lý (tri thức lý luận, chủ trương, chính sách đúng) để nhận thức tình hình thực tế; Đồng thời, hoàn thiện tình hình thực tế để bổ sung, hiểu rõ chân lý.",
      "Hiểu rõ chân lý (tri thức lý luận, chủ trương, chính sach đúng) để phân tích đúng tình hình thực tế về kinh tế, xã hôi; Đồng thời, đẩy mạnh hoạt động kinh tế, xã hội để hoàn thiện chân lý, tức chủ trương, chính sách đúng.",
      "Hiểu rõ chân lý (tri thức lý luận, chủ trương, chính sách đúng) để nhận thức đúng thực tiễn kinh tế, xã hội; Đồng thời, tổng kết tri thức lý luận để kiểm nghiệm thực tiễn về kinh tế, xã hội đúng.",
      "Hiểu rõ chân lý (tri thức lý luận, chủ trương, chính sách đúng ) để hướng dẫn, chỉ đạo hoạt động thực tiễn về kinh tế, xã hội; Đồng thới, tổng kết thực tiễn để kiểm nghiệm và hoàn thiện chân lý, tức chủ trướng, chính sách đúng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 139,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cơ sở tạo nên mối liên hệ phổ biến là:",
    "options": [
      "Tính thống nhất vật chất của thế giới.",
      "Chủ thể nhận thức khách thể.",
      "Cảm giác của con người.",
      "Tính thống nhất tinh thần của thế giới."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 140,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Khi xem xét sự vật, quan điểm toàn diện yêu cầu:",
    "options": [
      "Phải nhấn mạnh mọi yếu tố, mọi mối liên hệ của sự vật.",
      "Phải coi các yếu tố, các mối liên hệ của sự vật là ngang nhau.",
      "Phải nhận thức sự vật như một hệ thống chỉnh thể bao gồm những mối liên hệ qua lại giữa các yếu tố của nó cũng như giữa nó với các sự vật khác",
      "Phải xem xét các yếu tố, các mối liên hệ cơ bản, quan trọng và bỏ qua những yếu tố, những mối liên hệ không cơ bản, không quan trọng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 141,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Khi đánh giá một con người, quan điểm toàn diện đòi hỏi:",
    "options": [
      "Phải đặc biệt nhấn mạnh một mặt nào đó, bỏ qua những mặt còn lại.",
      "Phải xuất phát từ mục đích và lợi ích của họ mà đánh giá.",
      "Phải đặt họ vào những điều kiện, thời đại của mình mà đánh giá.",
      "Phải đặt họ trong những mối quan hệ với những người khác có thể ảnh hưởng đến sự phát triển của họ mà đánh giá."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 142,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc trực tiếp và quan trọng nhất quyết định sự ra đời và phát triển của ý thức:",
    "options": [
      "Sự tác động của tự nhiên vào bộ óc người.",
      "Lao động và ý thức.",
      "Bộ não người và hoạt động của nó.",
      "Lao động và ngôn ngữ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 143,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Chọn đáp án sai. Trong hoạt động thực tế:",
    "options": [
      "Không cần tích luỹ về lượng mà có thể thay đổi luôn chất của sự vật.",
      "Thay đổi chất của sự vật trên cơ sở tích luỹ về lượng.",
      "Phải kiên quyết thực hiện bước nhảy khi đã tới điểm điển nút.",
      "Phải chống tư tưởng rụt rè, bảo thủ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 144,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Những hình thức (cấp độ) nhận thức cho phép đào sâu, tìm hiểu bản chất của sự vật:",
    "options": [
      "Nhận thức cảm tính, nhận thức khoa học, nhận thức lý luận.",
      "Nhận thức lý tính, nhận thức khoa học, nhận thức lý luận.",
      "Nhận thức lý tính, nhận thức thông thường, nhận thức cảm tính, nhận thức lý luận.",
      "Nhận thức lý tính, nhận thức kinh nghiệm, nhận thức khoa học."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 145,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là sai:",
    "options": [
      "Nhận thức cảm tính gắn liền với thực tiễn.",
      "Nhận thức cảm tính chưa phân biệt được cái bản chất với cái không bản chất.",
      "Nhận thức cảm tính phản ánh sai sự vật.",
      "Nhận thức cảm tính chưa phản ánh đầy đủ và sâu sắc sự vật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 146,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Xác định quan niệm sai về mâu thuẫn và vai trò của mâu thuẫn:",
    "options": [
      "Sự liên hệ, tác động qua lại lẫn nhau giữa các mặt đối lập trong các sự vật là mâu thuẫn.",
      "Mâu thuẫn vừa có tính khách quan vừa có tính phổ biến trong tự nhiên xã hội và tư duy.",
      "Quy luật mâu thuẫn là hạt nhân của phép biện chứng duy vật, nó chỉ rõ nguồn gốc, động lực của sự phát triển.",
      "Sự thống nhất, đấu tranh chuyển hoá giữa các mặt đối lập gọi là mâu thuẫn."
    ],
    "answer": 0,
    "explanation": "V.I. Lênin khẳng định: Quy luật thống nhất và đấu tranh của các mặt đối lập là hạt nhân của phép biện chứng duy vật."
  },
  {
    "id": 147,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan hệ giữa chất với kết cấu của sự vật là:",
    "options": [
      "Chất bị quy định bởi kết cấu của sự vật.",
      "Chất hoàn toàn độc lập với kết cấu của sự vật.",
      "Tùy từng trường hợp thì chất có mối quan hệ với kết cấu của sự vật.",
      "Chất hoàn toàn độc lập với kết cấu của sự vật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 148,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Muốn có ý thức đúng thì chúng ta phải:",
    "options": [
      "Xuất phát từ thực tiễn khách quan.",
      "Xuất phát từ nguyện vọng chủ quan.",
      "Tự nghĩ ra rồi trao đổi với người khác.",
      "Tham khảo ý kiến người khác."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 149,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan niệm của chủ nghĩa duy vật biện chứng, các mối liên hệ có vai trò đối với sự tồn tại và phát triển của sự vật là:",
    "options": [
      "Có vai trò khác nhau, nên chỉ cần biết một số mối liên hệ.",
      "Có vai trò ngang bằng nhau.",
      "Có vai trò khác nhau, cần phải xem xét mọi mối liên hệ.",
      "Có vai trò ngang bằng nhau, nên chỉ cần xem xét một mối liên hệ"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 150,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan điểm nào cho rằng thế giới vô cơ, thế giới sinh vật và xã hội loài người là 3 lĩnh vực hoàn toàn khác biệt nhau, không quan hệ gì với nhau:",
    "options": [
      "Quan điểm duy vật siêu hình.",
      "Quan điểm duy vật biện chứng.",
      "Quan điểm duy tâm khách quan.",
      "Quan điểm duy tâm chủ quan"
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 151,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan điểm nào cho rằng tồn tại là sự phức hợp của những cảm giác:",
    "options": [
      "Quan điểm duy vật siêu hình.",
      "Quan điểm duy vật biện chứng.",
      "Quan điểm duy tâm khách quan.",
      "Quan điểm duy tâm chủ quan."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 152,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan điểm nào cho rằng bản chất thế giới là Ý niệm, vạn vật trong thế giới, kể cả con người chỉ là hình bóng của Ý niệm:",
    "options": [
      "Quan điểm duy vật siêu hình.",
      "Quan điểm duy vật biện chứng.",
      "Quan điểm duy tâm khách quan.",
      "Quan điểm duy tâm chủ quan."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 153,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Kết cấu của ý thức bao gồm:",
    "options": [
      "Bộ não người; thế giới khách quan; các giác quan.",
      "Tri thức; thực tiễn; bộ não người.",
      "Tri thức; tình cảm; ý chí.",
      "Ý chí; nghị lực; tình cảm."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 154,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học mácxít, yếu tố cơ bản và cốt lõi trong kết cấu của ý thức là:",
    "options": [
      "Niềm tin, ý chí.",
      "Tình cảm.",
      "Tri thức.",
      "Lý trí."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 155,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Vai trò của vật chất đối với ý thức:",
    "options": [
      "Vật chất có trước ý thức; hình thành từ ý thức và quyết định ý thức",
      "Vật chất có trước ý thức; là nguồn gốc của ý thức và quyết định ý thức.",
      "Vật chất có trước ý thức; là sản phẩm của ý thức và tùy thuộc vào ý thức.",
      "Vật chất có trước ý thức; là cái tạo nên ý thức và tồn tại trong ý thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 156,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Trong mối quan hệ giữa vật chất và ý thức, ý thức có vai trò:",
    "options": [
      "Tác động đến vật chất thông qua hoạt động thực tiễn của con người.",
      "Có khả năng tự chuyển thành hình thức vật chất nhất định để tác động vào hình thức vật chất khác.",
      "Tác động trực tiếp đến vật chất",
      "Không có vai trò đối với vật chất, vì hòan tòan phụ thuộc vào vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 157,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phép biện chứng duy vật là:",
    "options": [
      "Là khoa học về sự vận động, phát triển của các sự vật, hiện tượng trong tự nhiên, xã hội và tư duy.",
      "Là khoa học về sự vận động, phát triển của sự vật, hiện tượng trong tự nhiên và xã hội.",
      "Là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy.",
      "Là khoa học nghiên cứu về sự vận động của giới tự nhiên một cách biện chứng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 158,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Đặc trưng cơ bản của phép biện chứng duy vật là:",
    "options": [
      "Được xác lập trên nền tảng của thế giới quan duy vật khoa học; và sự thống nhất giữa nội dung thế giới quan (duy vật biên chứng) và phương pháp luận (biện chứng duy vật).",
      "Được xác lập trên nền tảng thế giới quan biện chứng; và sự thống nhất giữa thế giới quan (duy vật ) và phương pháp luận (tư duy biện chứng).",
      "Được xác lập trên nền tảng thế giới quan duy vật biện chứng; và sự thống nhất giữa nội dung (biện chứng khách quan) và phương pháp luận (biện chứng chủ quan).",
      "Được xác lập trên nền tảng thế giới quan tư duy biện chứng; và sự thống nhất giữa nội dung (thế giới khach quan) và phướng pháp luận (ý thức chủ quan)."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 159,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Theo quan điểm triết học Mác – Lênin: Mối liên hệ là dùng để chỉ:",
    "options": [
      "Sự quy định của ý chí con người đối với sự vật, hiện tượng tồn tại khách quan.",
      "Sự quy định, sự tác động giữa các mặt trong cùng một sự vật, hiện tượng",
      "Sự tác động giữa các các sự vật, hiện tượng với nhau còn trong bản thân sự vật hiện tượng không có mối liên hệ.",
      "Sự quy định, sự tác động và chuyển hóa lẫn nhau giữa các sự vật, hiện tượng trong thế giới."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 160,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Tính chất của mâu thuẫn biện chứng là:",
    "options": [
      "Tính khách quan, tính lịch sử và tính vĩnh cửu.",
      "Tính khách quan, tính tuyệt đối và tính cụ thể.",
      "Tinh khách quan, tính phổ biến và tính đa dạng, phong phú.",
      "Tính tuyệt đối, tính tương đối và tính vận động, phát triển."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 161,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Đối lập với quan điểm toàn diện trong nhận thức và hoạt động thực tiễn là:",
    "options": [
      "Quan điểm chiết trung.",
      "Quan điểm ngụy biện.",
      "Quan điểm phiến diện.",
      "Quan điểm phát triển."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 162,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Giới hạn từ 0 độ C đến 100 độ C được gọi là gì trong quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại là:",
    "options": [
      "Độ.",
      "Chất.",
      "Lượng.",
      "Bước nhảy."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 163,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Khi nước chuyển từ trạng thái lỏng sang trạng thái khí tại 100 độ C được gọi là gì trong quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại là:",
    "options": [
      "Độ.",
      "Bước nhảy.",
      "Chuyển hoá.",
      "Tịnh tiến."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 164,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Phát triển trong phép biện chứng duy vật là chỉ:",
    "options": [
      "Sự thay đổi về mặt số lượng hay khối lượng của sự vật, hiện tượng tạo nên sự vận động, lớn dần lên của nó.",
      "Sự thay đổi vị trí của sự vật, hiện tượng trong không gian tạo nên sự biểu hiện phong phú, đa dạng của chúng.",
      "Quá trình vận động của sự vật theo khuynh hướng đi lên: từ trình độ thấp đến trình độ cao, từ kém hoàn thiện đến hoàn thiện hơn, là sự biến đổi về chất của sự vật.",
      "Quá trình vận động mang tính lịch sử của thế giới vật chất theo khuynh hướng đi lên gắn vơi hoàn cảnh cụ thể."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 165,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "“Bước nhảy” trong phép biện chứng duy vật dùng để chỉ:",
    "options": [
      "Sự thay đổi về chất của sự vật.",
      "Sự thay đổi về lượng của sự vật.",
      "Sự mâu thuẫn giữa chất và lượng của sự vật.",
      "Sự tích lũy dần về chất của sự vật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 166,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "“Điểm nút” trong phép biện chứng duy dùng để chỉ:",
    "options": [
      "Sự thống nhất biện chứng giữa chất và lượng.",
      "Sự thay đổi từ chất cũ sang chất mới và ngược lại.",
      "Thời điểm diễn ra sự thay đổi về chất của sự vật, hiện tượng.",
      "Lượng thay đổi đến một giới hạn nhất định thì dẫn đến sự thay đổi về chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 167,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Nhận thức lý tính được thực hiện thông qua những hình thức cơ bản nào:",
    "options": [
      "Cảm giác – Tri giác – Biểu tượng.",
      "Cảm giác – Phán đoán – Tri giác",
      "Khái niệm – Phán đoán – Suy lý.",
      "Khái niệm – Suy lý – Tri giác."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 168,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Vòng khâu của quá trình nhận thức là:",
    "options": [
      "Từ cảm tính đến lý tính, từ lý tính đến hành động.",
      "Từ hành động đến cảm tính, từ cảm tính đến tư duy trừu tượng.",
      "Từ trực quan sinh động đến tư duy trừu tượng, từ tư duy trừu tượng đến hệ thống khái niệm.",
      "Từ trực quan sinh động đến tư duy trừu tượng, từ tư duy trừu tượng đến thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 169,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Tính năng động sáng tạo của ý thức, thể hiện qua câu nói:",
    "options": [
      "Cái khó ló cái khôn.",
      "Góp gió thành bão, góp cây nên rừng.",
      "Có công mài sắt có ngày nên kim.",
      "Chim khôn hót tiếng rảnh rang, người khôn nói tiếng dịu dàng dễ nghe."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 170,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Câu nói “Người vô lo, vô nghĩ trẻ lâu” thể hiện:",
    "options": [
      "Ý thức tác động tới vật chất.",
      "Vật chất có trước và quyết định ý thức.",
      "Vật chất quyết định ý thức.",
      "Cả vật chất và ý thức đều không có tác động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 171,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Có quan điểm cho rằng:\n“Tiền là tiên là Phật,\nLà sự thật cuộc đời,\nLà nụ cười tuổi trẻ,\nLà sức khoẻ tuổi già...” thể hiện quan niệm:",
    "options": [
      "Tuyệt đối hoá vật chất, coi thường vật chất.",
      "Tuyệt đối hóa ý thức, coi thường ý thức tinh thần.",
      "Đề cao vai trò của tinh thần.",
      "Đề cao vai trò của tinh thần, coi thường vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 172,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Xác định đáp án đúng nhất. Trực quan sinh động và tư duy trừu tượng tồn tại trong quá trình nhận thức là:",
    "options": [
      "Có tính độc lập tương đối.",
      "Trong mối quan hệ biện chứng.",
      "Vừa có tính độc lập tương đối, vừa có mối quan hệ biện chứng.",
      "Tác động qua lại với nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 173,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Xác định mệnh đề đúng theo quan điểm của triết học Mác – Lênin:",
    "options": [
      "Tổng số các mặt, các yếu tố, quan hệ do con người tạo ra là nội dung.",
      "Quan hệ giữa nội dung và hình thức không có mâu thuẫn.",
      "Nội dung của sự vật biến đổi chậm hơn hình thức.",
      "Chủ nghĩa duy vật biện chứng chủ yếu nói tới hình thức bên trong của sự vật."
    ],
    "answer": 3,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 174,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Xác định phương án sai theo quan điểm của triết học Mác - Lênin về phương pháp biện chứng:",
    "options": [
      "Phương pháp biện chứng là phương pháp nhận thức sự vật trong các mối liên hệ, ràng buộc, quy định lẫn nhau.",
      "Phương pháp biện chứng là phương pháp nhận thức sự vật ở trạng thái vận động, biến đổi, nằm trong khuynh hướng chung là phát triển.",
      "Phương pháp biện chứng là phương pháp xem xét nguyên nhân của mọi biến đổi nằm ngoài đối tượng.",
      "Phương pháp biện chứng là phương pháp xem xét nguyên nhân của mọi biến đổi nằm bên trong đối tượng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 175,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan hệ giữa con người với con người trong gia đình khác với trong lớp học, vì:",
    "options": [
      "Do thời gian khác nhau.",
      "Do không gian khác nhau.",
      "Do môi trường khác nhau.",
      "Do con người khác nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 176,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Dân gian có câu “Có công mài sắt có ngày nên kim”, câu tục ngữ trên phản ánh quy luật:",
    "options": [
      "Quy luật mâu thuẫn.",
      "Quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại.",
      "Quy luật phủ định của phủ định.",
      "Quy luật đấu tranh giai cấp."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 177,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan điểm: “Giáo dục nhà trường kết hợp chặt chẽ với giáo dục gia đình và xã hội” thuộc về quan điểm nào sau đây:",
    "options": [
      "Quan điểm lịch sử - cụ thể.",
      "Quan điểm toàn diện.",
      "Quan điểm phát triển.",
      "Quan điểm trừu tượng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 178,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Quan điểm của Đảng Cộng sản Việt Nam: “Việt Nam muốn làm bạn với tất cả các nước trên nguyên tắc chung sống hoà bình, không can thiệp vào công việc nội bộ của nhau, cùng có lợi” thể hiện quan điểm:",
    "options": [
      "Lịch sử - cụ thể, phát triển.",
      "Toàn diện, lịch sử - cụ thể.",
      "Phát triển, lịch sử - cụ thể.",
      "Lịch sử - cụ thể, toàn diện, phát triển."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 179,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Câu tục ngữ: “Trăm đom đóm không bằng bó đuốc/ Trăm hòm chì chẳng đúc lên chuông”, thể hiện quan điểm:",
    "options": [
      "Không thể lấy lượng thay thế cho chất.",
      "Lượng của sự vật thay đổi.",
      "Phải chú ý tới lượng để thay đổi chất.",
      "Phải chú ý đến độ của sự vật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 180,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Dân gian có câu: “Góp gió thành bão”. Câu nói đó thể hiện quan niệm:",
    "options": [
      "Chất của sự vật thay đổi.",
      "Tích lũy về lượng để thay đổi về chất.",
      "Lượng của sự vật thay đổi.",
      "Sự chuyển hóa từ chất thành lượng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 181,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Khi xem xét mâu thuẫn bất kỳ của sự vật hiện tượng nào cần phải xem xét:",
    "options": [
      "Xem mâu thuẫn đó thuộc loại mâu thuẫn nào để có cách giải quyết phù hợp.",
      "Khi giải quyết mâu thuẫn không cần chú ý tới sự tác động của các mâu thuẫn khác.",
      "Chỉ cần tập trung giải quyết mâu thuẫn đang tồn tại.",
      "Giải quyết mâu thuẫn đang tồn tại theo hướng có lợi cho bản thân chứ không cần phân loại mâu thuẫn để giải quyết."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 182,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Cách mạng Tháng Tám năm 1945 ở Việt Nam là bước nhảy:",
    "options": [
      "Toàn bộ, dần dần.",
      "Nhỏ, cục bộ.",
      "Toàn bộ, đột biến.",
      "Lớn, đột biến."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 183,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Nhận thức lý tính khác với nhận thức cảm tính ở chỗ:",
    "options": [
      "Nhận thức lý tính phản ánh được mối liên hệ bản chất; phản ánh sự vật hiện tượng kém sâu sắc hơn nhận thức cảm tính.",
      "Nhận thức lý tính không ẩn chứa nguy cơ xa rời hiện thực, luôn phản ánh chính xác nhất.",
      "Nhận thức lý tính phản ánh, khái quát, trừu tượng, gián tiếp sự vật, hiện tượng trong tính tất yếu, chỉnh thể toàn diện.",
      "Nhận thức lý tính phản ánh cụ thể, rõ ràng, trực tiếp sự vật, hiện tượng trong tính tất yếu, chỉnh thể toàn diện."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 184,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Trong hoạt động thực tiễn, sai lầm của trì trệ bảo thủ là không tôn trọng quy luật sau:",
    "options": [
      "Quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại.",
      "Quy luật phủ định của phủ định.",
      "Quy luật mâu thuẫn.",
      "Quy luật xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 185,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Trong hoạt động thực tiễn, sai lầm của nôn nóng, tả khuynh là không tôn trọng quy luật sau:",
    "options": [
      "Quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại.",
      "Quy luật phủ định của phủ định.",
      "Quy luật mâu thuẫn.",
      "Quy luật tự nhiên."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 186,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Trong hoạt động thực tiễn, sai lầm của không xác định đúng mặt đối lập cơ bản của đối tượng, không có phương pháp phù hợp tạo động lực phát triển cho đối tượng là không tôn trọng quy luật sau:",
    "options": [
      "Quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại.",
      "Quy luật phủ định của phủ định.",
      "Quy luật mâu thuẫn.",
      "Quy luật tự nhiên."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 187,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Tư tưởng nôn nóng, đốt cháy giai đoạn phản ánh trực tiếp việc:",
    "options": [
      "Không vận dụng đúng quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Không vận dụng đúng quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại.",
      "Không vận dụng quy luật phủ định của phủ định.",
      "Không vận dụng đúng quy luật tự nhiên."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 188,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Nhận thức cảm tính có tính chất:",
    "options": [
      "Sinh động, cụ thể, trực tiếp, sâu sắc.",
      "Trực tiếp, trừu tượng, khái quát, hời hợt.",
      "Sinh động, trừu tượng, trực tiếp, sâu sắc.",
      "Sinh động, cụ thể, trực tiếp, hời hợt."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 189,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Nhận thức lý tính có tính chất:",
    "options": [
      "Trừu tượng, gián tiếp, khái quát, hời hợt.",
      "Trừu tượng, trực tiếp, khái quát, sâu sắc.",
      "Sâu sắc, trừu tượng, gián tiếp, khái quát.",
      "Sinh động, trừu tượng, gián tiếp, sâu sắc."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 190,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Câu nói “Quá mù ra mưa” thể hiện quan điểm:",
    "options": [
      "Sự thay đổi về lượng khi “vượt độ” sẽ dẫn đến sự thay đổi về chất.",
      "Phải chú ý tạo nên sự chuyển hóa về chất của sự vật.",
      "Lượng của sự vật thay đổi.",
      "Tạo điều kiện để sự vật chuyến hóa về chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 191,
    "chapter": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "tag": "",
    "question": "Khi con tàu đậu trên sân ga thì con tàu ở trạng thái là:",
    "options": [
      "Vận động.",
      "Không vận động.",
      "Đứng im tuyệt đối.",
      "Vận động trong cân bằng ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 192,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Theo Triết học Mác – Lênin để phân chia trình độ tiến bộ của xã hội ở từng giai đoạn phát triển của lịch sử căn cứ vào:",
    "options": [
      "Trình độ phát triển của khoa học kĩ thuật.",
      "Trình độ dân trí và mức sống cao của xã hội.",
      "Trình độ phát triển của lực lượng sản xuất.",
      "Trình độ phát triển của đạo đức, pháp luật, tôn giáo."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 193,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Phương thức sản xuất là thể thống nhất của những nhân tố:",
    "options": [
      "Quan hệ sản xuất và kiến trúc thượng tầng.",
      "Lực lượng sản xuất và kiến trúc thượng tầng.",
      "Cơ sở hạ tầng và kiến trúc thượng tầng.",
      "Lực lượng sản xuất và quan hệ sản xuất."
    ],
    "answer": 3,
    "explanation": "Phương thức sản xuất là sự thống nhất hữu cơ giữa Lực lượng sản xuất (mặt kỹ thuật) và Quan hệ sản xuất (mặt kinh tế-xã hội)."
  },
  {
    "id": 194,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Chọn câu của C.Mác về bản chất con người trong các phương án sau:",
    "options": [
      "Trong tính hiện thực, bản chất con người là tổng hòa các mối quan hệ xã hội.",
      "Bản chất con người là sự thống nhất giữa mặt sinh học và mặt xã hội.",
      "Bản chất con người không phải là cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội.",
      "Con người là vừa là chủ thể của lịch sử vừa là sản phẩm của lịch sử."
    ],
    "answer": 0,
    "explanation": "C. Mác: 'Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội'."
  },
  {
    "id": 195,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Bản chất của con người được quyết định bởi:",
    "options": [
      "Các mối quan hệ xã hội.",
      "Nỗ lực của mỗi cá nhân.",
      "Giáo dục của gia đình và nhà trường.",
      "Hoàn cảnh xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 196,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Con người là thể thống nhất của các mặt cơ bản:",
    "options": [
      "Sinh học và xã hội.",
      "Xã hội và tâm lý.",
      "Tâm lý và xã hội.",
      "Phẩm chất đạo đức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 197,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Hạt nhân cơ bản trong cộng đồng quần chúng nhân dân là:",
    "options": [
      "Các giai cấp, tầng lớp thúc đẩy sự tiến bộ của xã hội.",
      "Những người lao động sản xuất ra của cải vật chất và các giá trị tinh thần.",
      "Những người chống lại giai cấp thống trị phản động.",
      "Những người nghèo khổ."
    ],
    "answer": 0,
    "explanation": "V.I. Lênin khẳng định: Quy luật thống nhất và đấu tranh của các mặt đối lập là hạt nhân của phép biện chứng duy vật."
  },
  {
    "id": 198,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nội dung quy luật quan hệ sản xuất (QHSX) phải phù hợp với trình độ lực lượng sản xuất (LLSX) là:",
    "options": [
      "Sự phát triển của LLSX đòi hòi QHSX phải phù hợp theo; Và khi QHSX phù hợp sẽ thúc đẩy LLSX phát triển.",
      "Sự phát triển của QHSX đòi hỏi LLSX phải phù hợp theo; và khi LLSX phù hợp sẽ thúc đẩy QHSX phát triển.",
      "Sự phát triển của LLSX đòi hỏi trình độ kỹ thuật phải phù hợp theo; và khi trình độ kỹ thuật phù hợp sẽ thúc đẩy LLSX phát triển.",
      "Sự phát trển của QHSX đòi hỏi trình độ quản lý phải phù hợp thep; và khi trình độ quản lý phù hợp sẽ thúc đẩy QHSX phát triển."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 199,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Yếu tố được coi là cánh tay, bắp thịt, hệ thần kinh thứ hai của con người:",
    "options": [
      "Tư liệu lao động.",
      "Đối tượng lao động.",
      "Con người.",
      "Khoa học kỹ thuật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 200,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Chỉ rõ quan điểm sai về đấu tranh giai cấp sau đây:",
    "options": [
      "Đấu tranh giai cấp là đấu tranh của các tập đoàn người có quan điểm trái ngược nhau.",
      "Đấu tranh giai cấp là đấu tranh của những tập đoàn người có lợi ích căn bản đối lập nhau.",
      "Đấu tranh giai cấp là động lực trực tiếp của lịch sử các xã hội có giai cấp.",
      "Đấu tranh giai cấp là cuộc đấu tranh của quần chúng nhân dân lao động chống lại giai cấp thống trị."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 201,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cơ sở hạ tầng của một xã hội cụ thể bao gồm:",
    "options": [
      "Quan hệ sản xuất thống trị; Quan hệ sản xuất tàn dư; Quan hệ sản xuất mầm mống.",
      "Quan hệ sản xuất; Quan hệ tôn giáo; Quan hệ chính trị; Quan hệ sản xuất tàn dư.",
      "Quan hệ kinh tế; Quan hệ tôn giáo; Quan hệ chính trị; Quan hệ văn hóa; Quan hệ sản xuất tàn dư.",
      "Quan hệ sản xuất thống trị; Quan hệ sản xuất tàn dư; Quan hệ chính trị."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 202,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Kiến trúc thượng tầng của xã hội bao gồm:",
    "options": [
      "Toàn bộ những quan điểm, tư tưởng và những thiết chế xã hội tương ứng được hình thành trên cơ sở hạ tầng nhất định.",
      "Toàn bộ các tư tưởng xã hội và các tổ chức tương ứng.",
      "Toàn bộ các quan hệ xã hội được hình thành trong quá trình lao động.",
      "Toàn bộ hoạt động thực tiễn của con người."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 203,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Phạm trù thể hiện mối quan hệ giữa con người với tự nhiên trong quá trình sản xuất là:",
    "options": [
      "Lực lượng sản xuất.",
      "Quan hệ sản xuất.",
      "Cơ sở hạ tầng.",
      "Tồn tại xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 204,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nguyên nhân trực tiếp của sự ra đời giai cấp trong xã hội là:",
    "options": [
      "Do sự xuất hiện chế đội tư hữu về tư liệu sản xuất.",
      "Do sự chênh lệch về khả năng giữa các tập đoàn người.",
      "Do sự phân hóa giữa giàu và nghèo trong xã hội.",
      "Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 205,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Yếu tố giữ vai trò quan trọng nhất trong lực lượng sản xuất là:",
    "options": [
      "Tư liệu sản xuất.",
      "Người lao động.",
      "Khoa học kỹ thuật.",
      "Công cụ lao động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 206,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Quá trình sản xuất vật chất bao gồm những yếu tố cơ bản:",
    "options": [
      "Người lao động, công cụ lao động, đối tượng lao động.",
      "Sức lao động, công cụ lao động, khoa học kỹ thuật.",
      "Người lao động, đối tượng lao động, khoa học kỹ thuật.",
      "Người lao động, khoa học kỹ thuật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 207,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Tư liệu sản xuất bao gồm:",
    "options": [
      "Người lao động và công cụ lao động.",
      "Người lao động, công cụ lao động và đối tượng lao động.",
      "Tư liệu lao động và đối tượng lao động.",
      "Công cụ lao động và tư liệu lao động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 208,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Tìm đáp án sai:",
    "options": [
      "Lực lượng sản xuất là nội dung còn quan hệ sản xuất là hình thức của phương thức sản xuất.",
      "Lực lượng sản xuất là yếu tố động, cách mạng trong phương thức sản xuất.",
      "Lực lượng sản xuất quyết định sự phân công lao động xã hội, do đó, quyết định quan hệ giữa các tập đoàn người về mặt sở hữu tư liệu sản xuất.",
      "Sự phát triển của lực lượng sản xuất là do sự thay đổi của quan hệ sản xuất quy định."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 209,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Tiêu chuẩn khách quan để phân biệt các chế độ xã hội trong lịch sử là:",
    "options": [
      "Quan hệ sản xuất đặc trưng.",
      "Chính trị tư tưởng.",
      "Lực lượng sản xuất.",
      "Phương thức sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 210,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trong quan hệ sản xuất, quan hệ giữ vai trò quyết định là:",
    "options": [
      "Quan hệ sở hữu tư liệu sản xuất.",
      "Quan hệ tổ chức quản lý quá trình sản xuất.",
      "Quan hệ phân phối sản phẩm.",
      "Quan hệ sở hữu tư nhân về tư liệu sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 211,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Khuynh hướng của sản xuất là không ngừng biến đổi phát triển. Sự biến đổi đó bao giờ cũng bắt đầu từ:",
    "options": [
      "Sự biến đổi, phát triển của cách thức sản xuất.",
      "Sự biến đổi, phát triển của lực lượng sản xuất.",
      "Sự biến đổi, phát triển của kĩ thuật sản xuất.",
      "Sự phát triển của cách thức tổ chức sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 212,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Quy luật xã hội giữ vai trò quyết định đối với sự vận động, phát triển của xã hội:",
    "options": [
      "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất.",
      "Quy luật cơ sở hạ tầng quyết định kiến trúc thượng tầng.",
      "Quy luật tồn tại xã hội quyết định ý thức xã hội.",
      "Quy luật từ những sự biến đổi về lượng dẫn đến sự biến đổi về chất và ngược lại."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 213,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Điền thêm từ để có câu trả lời đúng theo quan niệm duy vật lịch sử và xác định đó là nhận định của ai:\n“Trong tính hiện thực của nó, bản chất con người là…”",
    "options": [
      "Tổng hoà các quan hệ kinh tế/ V.I. Lênin.",
      "Toàn bộ các quan hệ xã hội/ Ph. Ăngghen.",
      "Tổng hoà những quan hệ xã hội/ C. Mác.",
      "Tổng hoà các quan hệ tự nhiên và xã hội/ C. Mác."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 214,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Con người là:",
    "options": [
      "Thực thể vật chất tự nhiên.",
      "Thực thể chính trị và đạo đức.",
      "Thực thể chính trị, có tư duy và văn hoá.",
      "Thực thể tự nhiên và xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 215,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò của đấu tranh giai cấp trong các xã hội có giai cấp đối kháng:",
    "options": [
      "Là con đường tiến bộ xã hội; hình thành chế độ mới, phát triển hơn.",
      "Là phương thức vận động của lịch sử; hình thành xu hướng phát triển nhân loại.",
      "Là động lực tiến bộ lịch sử; hình thành xã hội mới, tiến bộ hơn.",
      "Là điều kiện tiến bộ lịch sử; hình thành nền văn minh nhân loại."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 216,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Tiến trình phát triển các hình thái kinh tế - xã hội nói chung của xã hội loài người đã và đang lần lượt trải qua các hình thái kinh tế - xã hội:",
    "options": [
      "Công xã nguyên thủy, chiếm hữu nô lệ, tư bản chủ nghĩa, cộng sản chủ nghĩa.",
      "Công xã nguyên thủy, chiếm hữu nô lệ, phong kiến, tư bản chủ nghĩa.",
      "Công xã nguyên thủy, chiếm hữu nô lệ, phong kiến, tư bản chủ nghĩa, cộng sản chủ nghĩa.",
      "Công xã nguyên thủy, chiếm hữu nô lệ, phong kiến, tư bản chủ nghĩa, xã hội chủ nghĩa."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 217,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cơ sở hạ tầng của xã hội là:",
    "options": [
      "Đường xá, cầu cống, bến cảng, bưu điện…",
      "Tổng hợp của quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội.",
      "Toàn bộ cơ sở vật chất - kỹ thuật của xã hội.",
      "Đời sống vật chất của xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 218,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trong chủ nghĩa duy vật lịch sử, khái niệm “phương thức sản xuất” dùng để chỉ:",
    "options": [
      "Cách thức tiến hành quá trình sản xuất ra của cải vật chất trong một giai đoạn lịch sử nhất định.",
      "Quá trình sản xuất ra của cải vật chất trong một giai đoạn lịch sử nhất định.",
      "Cơ chế vận hành kinh tế trong các điều kiện cụ thể của xã hội.",
      "Quá trình sản xuất ra của cải vật chất với một cơ chế kinh tế nhất định."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 219,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò của cách mạng xã hội là:",
    "options": [
      "Phương thức, động lực của phát triển xã hội, tạo nên các nấc thang của tiến bộ lịch sử nhân loại.",
      "Con đường, biện pháp của phát triển xã hôi, tạo nên các cột mốc ghi dấu tiến bộ của lịch sử nhân loại.",
      "Hình thức, xu hướng của phát triển xã hội, tạo nên các điều kiện hình thành tiến bộ lich sử nhân loại.",
      "Xu thế và cơ sở của phát triển xã hội, tạo nên các tiền đề của tiến bộ lịch sử nhân loại."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 220,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Chọn đáp án sai.",
    "options": [
      "Lực lượng sản xuất là quan hệ giữa con người với tự nhiên trong quá trình sản xuất.",
      "Lực lượng sản xuất thể hiện năng lực chinh phục tự nhiên của con người.",
      "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức.",
      "Lực lượng sản xuất thường biến đổi chậm hơn so với quan hệ sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 221,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nguyên nhân sâu xa của cách mạng xã hội là do:",
    "options": [
      "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất.",
      "Mâu thuẫn giữa hai giai cấp đối kháng nhau về lợi ích.",
      "Mâu thuẫn giữa giàu và nghèo.",
      "Mâu thuẫn giữa những người vô sản và những người hữu sản."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 222,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Mâu thuẫn đối kháng giữa các giai cấp là do:",
    "options": [
      "Sự khác nhau về tư tưởng, lối sống.",
      "Sự đối lập về lợi ích cơ bản – lợi ích kinh tế.",
      "Sự đối lập giữa giàu và nghèo.",
      "Sự khác nhau về mức thu nhập."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 223,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "C.Mác viết: “Tôi coi sự phát triển của những hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên”, theo nghĩa:",
    "options": [
      "Sự phát triển của các hình thái kinh tế - xã hội cũng giống như sự phát triển của tự nhiên không phụ thuộc vào nhân tố chủ quan của con người.",
      "Sự phát triển của các hình thái kinh tế - xã hội tuân theo quy luật khách quan của xã hội.",
      "Sự phát triển của các hình thái kinh tế - xã hội ngoài tuân theo các quy luật chung còn bị chi phối bởi điều kiện lịch sử cụ thể của mỗi quốc gia dân tộc.",
      "Sự phát triển của các hình thái kinh tế - xã hội tuân theo các quy luật chung."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 224,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Quan hệ cơ bản quy định địa vị của giai cấp thường là do:",
    "options": [
      "Sở hữu tư liệu sản xuất.",
      "Pháp luật quy định và thừa nhận.",
      "Hình thành một cách tự nhiên.",
      "Định mệnh."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 225,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cái quy định hành vi ứng xử đầu tiên và cũng là động lực thúc đẩy con người hoạt động trong suốt lịch sử của mình là:",
    "options": [
      "Mục tiêu, lý tưởng.",
      "Khát vọng quyền lực về kinh tế, chính trị.",
      "Nhu cầu và lợi ích.",
      "Lý tưởng sống."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 226,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Sự biến đổi có tính chất cách mạng của kiến trúc thượng tầng là do:",
    "options": [
      "Thay đổi chính quyền nhà nước.",
      "Thay đổi lực lượng sản xuất.",
      "Thay đổi quan hệ sản xuất thống trị.",
      "Sự thống trị của cơ sở hạ tầng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 227,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Yếu tố của kiến trúc thượng tầng được coi là có tác động trực tiếp nhất và mạnh mẽ nhất tới cơ sở hạ tầng kinh tế của xã hội là:",
    "options": [
      "Chính trị.",
      "Đảng.",
      "Nhà nước.",
      "Triết học."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 228,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Muốn nhận thức bản chất con người nói chung thì phải:",
    "options": [
      "Thông qua cách ứng xử của con người trong xã hội.",
      "Thông qua phẩm chất và năng lực của con người.",
      "Thông qua các quan hệ hiện thực của con người.",
      "Thông qua phẩm chất và hình dạng của con người."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 229,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Hiểu vấn đề “bỏ qua” chế độ tư bản chủ nghĩa ở Việt Nam là:",
    "options": [
      "Là sự “bỏ qua” việc xác lập địa vị thống trị của quan hệ sản xuất tư bản chủ nghĩa.",
      "Là “bỏ qua” sự phát triển của lực lượng sản xuất.",
      "Là sự phát triển tuần tự.",
      "Bỏ qua kiến trúc thượng tầng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 230,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Về cấu trúc, hình thái kinh tế - xã hội bao gồm những bộ phận cơ bản:",
    "options": [
      "Giai cấp cơ bản và giai cấp không cơ bản.",
      "Lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng.",
      "Nhà nước, chính đảng, đoàn thể.",
      "Các quan hệ sản xuất của xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 231,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Định nghĩa về giai cấp của Lênin: Giai cấp là:",
    "options": [
      "Những tập đoàn người khác nhau về địa vị chính trị - xã hội. Nguồn gốc của giai cấp là ở quyền lực thống trị trong xã hội.",
      "Những tập đoàn người khác nhau về địa vị kinh tế - xã hội. Nguồn gốc của giai cấp là ở quan hệ về tư liệu sản xuất và lợi ích kinh tế.",
      "Những tập đoàn người khác nhau về trình độ phát triển về kinh tế và văn hóa. Nguồn gốc của giai cấp là vai trò quản lý xã hội.",
      "Những tập đoàn người khác nhau về điều kiện sinh sống trong xã hội. Nguồn gốc của giai cấp là ở quan hệ về lợi ích kinh tế."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 232,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Quy luật xã hội giữ vai trò quyết định đối với sự vận động và phát triển của xã hội là:",
    "options": [
      "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng quyết định kiến trúc thượng tầng.",
      "Quy luật tồn tại xã hội quyết định ý thức xã hội.",
      "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất.",
      "Quy luật đấu tranh giai cấp"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 233,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nhà nước có những chức năng cơ bản:",
    "options": [
      "Tính giai cấp và tính xã hội.",
      "Trấn áp kẻ thù, bảo vệ lợi ích giai cấp.",
      "Thu thuế và ba hành pháp luật.",
      "Có quyền lực công cộng đặc biệt."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 234,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Quần chúng nhân dân là:",
    "options": [
      "Là những người sản xuất ra của cải vật chất, những bộ phận dân cư chống lại giai cấp thống trị, những bộ phận thúc đẩy sự tiến bộ xã hội.",
      "Chỉ những người thuộc giai cấp bị trị và tầng lớp trí thức.",
      "Tất cả các giai cấp, tầng lớp trong một xã hội.",
      "Chỉ những bộ phận nghèo khổ, thất học trong xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 235,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò cá nhân người lãnh đạo của quần chúng nhân dân là:",
    "options": [
      "Có ý nghĩa thúc đẩy tiến bộ lịch sử, văn minh nhân loại trong mọi thời đại.",
      "Có ý nghĩa quyết định toàn bộ lịch sử tiến hóa nhân loại, làm nên thắng lợi của các cuộc cách mạng xã hội.",
      "Có ý nghĩa quyết định trực tiếp trực đến toàn bộ lịch sử tiến hóa nhân loại, làm nên các thời đại văn minh trong lịch sử.",
      "Có ý nghĩa quyết định trực tiếp đến thành công hay thất bại của các phong trào cách mạng trong từng hoàn cảnh cụ thể."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 236,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Những phẩm chất cơ bản mà người lãnh tụ của quần chúng nhân dân cần có là:",
    "options": [
      "Trí tuệ uyên bác vượt trội; Năng lực tổ chức, tập hợp quần chúng; Phẩm chất đạo đức, ý chí phục vụ nhân dân.",
      "Trí tuệ thông minh, sáng suốt; Được quần chúng tín nhiệm, bầu lên; Phẩm chất đạo đức hiền lành, trung thực.",
      "Trí tuệ năng động, sáng tạo; Thương yêu quần chúng, nhân dân; Phẩm chất trong sáng, hòa đồng với giai cấp và dân tộc.",
      "Trí tuệ nhìn xa, trông rộng; Năng lực chuyên môn vững vàng; Phẩm chất thẳng thắn, trung thực."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 237,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Tuyệt đối hóa vai trò của cá nhân, lãnh tụ sẽ dẫn đến:",
    "options": [
      "Tệ coi thường lãnh tụ, làm cho phong trào quần chúng không có sự đoàn kết, nhất trí.",
      "Tăng thêm sức mạnh cho phong trào cách mạng.",
      "Tệ sùng bái cá nhân, làm hạn chế tính năng động, sáng tạo của quần chúng.",
      "Nhận thức đúng về vai trò của lãnh tụ."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 238,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Những đặc trưng cơ bản của sản xuất vật chất là:",
    "options": [
      "Tính khách quan; Tính tự giác; Tính xã hôi; Tính lịch sử; Tính sáng tạo.",
      "Tính khách quan; Tính thực tiễn; Tính đa dạng; Tính sáng tạo; Tính cụ thể.",
      "Tính phổ biến, Tính tự giác; Tính lịch sử; Tính năng động; Tính kế thừa.",
      "Tính phát triển; Tính cụ thể; Tính sáng tạo; Tính chủ động; Tính liên tục."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 239,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Đặc điểm lớn nhất của thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam là:",
    "options": [
      "Nhiều thành phần xã hội đan xen tồn tại.",
      "Lực lượng sản xuất chưa phát triển.",
      "Năng xuất lao động thấp.",
      "Từ một nền sản xuất nhỏ là phổ biến quá độ lên chủ nghĩa xã hội không qua chế độ tư bản chủ nghĩa."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 240,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Hai mặt cơ bản của phương thức sản xuất là:",
    "options": [
      "Mặt tự nhiên và mặt xã hội.",
      "Mặt vật chất và mặt tinh thần.",
      "Mặt vật chất và mặt ý thức.",
      "Mặt kỹ thuật và mặt xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 241,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cách mạng xã hội là:",
    "options": [
      "Là sự thay đổi chủ yếu vế chất, từ hình thái kinh tế - xã hội cũ, lên hình thái kinh tế -xã hội mới; Là thời cơ, bước ngoặt giải quyết mâu thuẫn và lợi ích giai cấp.",
      "Là sự thay đổi to lớn về chất, từ hình thái kinh tế - xã hội này, sang hình thái kinh tế - xã hội khác; Là bước tiến quyết định trong giải quyết mâu thuẫn, đối kháng giai cấp.",
      "Sự thay đổi căn bản về chất, từ hình thái kinh tế - xã hội này, lên hình thái kinh tế - xã hội cao hơn; Là đỉnh cao, điểm nút giải quyết mâu thuẫn, đối kháng giai cấp.",
      "Là sự thay đổi thật sự về chất, từ hình thái kinh tế - xã hội thấp lên hình thái kinh tế - xã hội cao; Là thời điểm quyết định giải quyết mâu thuẫn và đối kháng giai cấp."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 242,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Ý nghĩa phương pháp luận của việc nghiên cứu vai trò của quần chúng nhân dân (QCND) và người lãnh đạo (NLĐ) trong thực hiện các phong trào cách mạng:",
    "options": [
      "Quán triệt vai trò quan trọng của QCND, huy động nhân dân cùng những người lãnh đạo thực hiện tốt các phong trào cách mạng.",
      "Quán triết vai trò to lớn của QCND, giáo dục nhân dân ý chí cách mạng; Đồng thời, phải quan tâm bồi dưỡng cán bộ lãnh đạo nhân dân.",
      "Quán triệt vai trò sáng tạo lịch sử của QCND, tin tưởng và biết huy động sức mạnh to lơn cùa QCND; Đồng thời, phát hiện và bầu người có tài, có đức làm NLĐ.",
      "Quán triệt vai trò quyết định lịch sử của QCND, tin tưởng và động viên mọi tầng lớp nhân dân làm cách mạng; Đồng thời, bầu ra người yêu nước, thương dân làm NLĐ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 243,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Để xoá bỏ giai cấp trước hết phải xoá bỏ chế độ:",
    "options": [
      "Chế độ người bóc lột người.",
      "Chế độ tư hữu.",
      "Chế độ tư bản chủ nghĩa.",
      "Chế độ xã hội có phân chia thành đẳng cấp."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 244,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Khác biệt cơ bản nhất của nhà nước vô sản (NNVS) so với các nhà nước trước đó là:",
    "options": [
      "NNVS không củng cố sự thống trị về chính trị, mà chỉ lo xây dựng kinh tế nhằm tăng năng xuất lao động xã hội.",
      "NNVS chỉ chăm lo đến đời sống kinh tế và quyền lực chính trị mà không quan tâm đời sống tinh thần của xã hội.",
      "NNVS chỉ bảo vệ quyền lợi của người lao động.",
      "NNVS không chỉ bảo vệ lợi ích của người lao động mà còn bảo vệ lợi ích hợp pháp của cả giai cấp khác trong xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 245,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trong nền sản xuất hiện đại, xu hướng đối với người lao động là:",
    "options": [
      "Thể lực lao động không ngừng được nâng cao.",
      "Năng lực lao động ngang nhau, cơ hội có việc làm như nhau.",
      "Trí lực lao động không ngừng được nâng cao.",
      "Năng lực cạnh tranh trong công việc được nâng cao."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 246,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Sản xuất bao gồm các hình thức:",
    "options": [
      "Sản xuất vật chất; sản xuất tinh thần và sản xuất của cải.",
      "Sản xuất của cải; sản xuất ra tư liệu sản xuất và sản xuất ra vật phẩm tiêu dùng.",
      "Sản xuất vật chất, sản xuất tinh thần và sản xuất ra bản thân con người.",
      "Sản xuất vật chất, sản xuất văn hóa và sản xuất môi trường sinh thái."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 247,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Các nhân tố cơ bản của quá trình sản xuất là:",
    "options": [
      "Công cụ lao động và đối tượng lao động.",
      "Người lao động và môi trường lao động.",
      "Tư liệu lao động và người lao động.",
      "Tư liệu sản xuất và người lao động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 248,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Lực lượng sản xuất biểu hiện mối quan hệ:",
    "options": [
      "Mối quan hệ giữa các vật chất và tinh thần sản xuất.",
      "Mối quan hệ giữa con người với con người.",
      "Mối quan hệ giữa con người với tự nhiên.",
      "Mối quan hệ giữa con người với tự nhiên và với nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 249,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Lực lượng sản xuất bao gồm các yếu tố:",
    "options": [
      "Tư liệu sản xuất và người lao động.",
      "Tư liệu sản xuất, công cụ lao động và người lao động.",
      "Tư liệu sản xuất, công cụ lao động, người lao động và phương tiện lao động.",
      "Tư liệu sản xuất, công cụ lao động, phương tiện lao động và đối tượng lao động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 250,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Yếu tố cơ bản nhất của lực lượng sản xuất là:",
    "options": [
      "Người lao động.",
      "Tư liệu sản xuất.",
      "Công cụ lao động.",
      "Tư liệu lao động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 251,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Yếu tố mang tính cách mạng nhất trong lực lượng sản xuất là:",
    "options": [
      "Người lao động.",
      "Công cụ lao động.",
      "Phương tiện lao động.",
      "Tư liệu lao động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 252,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Yếu tố nào quyết định sự tồn tại và phát triển của xã hội loài người là:",
    "options": [
      "Vị trí địa lý của mỗi dân tộc.",
      "Điều kiện dân số.",
      "Phương thức sản xuất.",
      "Điều kiện môi trường."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 253,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trong mối quan hệ biện chứng giữa cơ sở hạ tầng (CSHT) và kiến trúc thượng tầng (KTTT) thì:",
    "options": [
      "CSHT quyết định KTTT.",
      "KTTT quyết định CSHT.",
      "Tuỳ thuộc vào thời đại kinh tế cụ thể mà xác định CSHT quyết định KTTT, hay KTTT quyết định CSHT.",
      "Không cái nào quyết định cái nào."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 254,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nguồn gốc vận động và phát triển của hình thái kinh tế - xã hội là do:",
    "options": [
      "Sự tăng lên không ngừng của năng xuất lao động.",
      "Sự phát triển liên tục của lực lượng sản xuất.",
      "Quần chúng nhân dân không ngừng nổi dậy đấu tranh chống các thế lực phản động trong xã hội.",
      "Mâu thuẫn giai - tầng trong xã hội, sự thay đổi của quan hệ sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 255,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nguyên nhân dẫn đến sự xuất hiện giai cấp là do:",
    "options": [
      "Từ chế độ chiếm hữu nô lệ và phân công lao động xã hội.",
      "Phân công lao động xã hội và xuất hiện chế độ tư hữu.",
      "Từ chế độ người bóc lột người và phân công lao động xã hội.",
      "Từ chế độ lao động làm thuê và xuất hiện chế độ tư hữu."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 256,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Để xoá bỏ giai cấp trước hết phải xoá bỏ chế độ:",
    "options": [
      "Chế độ người bóc lột người.",
      "Chế độ tư hữu.",
      "Chế độ tư bản chủ nghĩa.",
      "Chế độ xã hội có phân chia thành đẳng cấp."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 257,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Đấu tranh giai cấp, xét đến cùng, nhằm vào mục đích:",
    "options": [
      "Phát triển sản xuất.",
      "Giải quyết mâu thuẫn giai cấp, giành lấy lợi ích kinh tế.",
      "Lật đổ sự áp bức của giai cấp thống trị phản động.",
      "Xóa bỏ chế độ tư hữu, thủ tiêu xã hội có giai cấp."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 258,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò của đấu tranh giai cấp trong các xã hội có gia cấp đối kháng:",
    "options": [
      "Là con đường tiến bộ xã hội. Hình thành chế độ mới, phát triển hơn.",
      "Là phương thức vận động của lịch sử. Hình thành xu hướng phát triển nhân loại.",
      "Là động lực tiến bộ lịch sử. Hình thành xã hội mới, tiến bộ hơn.",
      "Là điều kiện tiến bộ lịch sử. Hình thành nền văn minh nhân loại."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 259,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cuộc đấu tranh của những người bị áp bức, bị bóc lột, bị trị chống lại kẻ áp bức, bóc lột, thống trị về thực chất là cuộc đấu tranh:",
    "options": [
      "Giành chính quyền.",
      "Giải phóng nhân loại.",
      "Giai cấp.",
      "Tự do."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 260,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cơ sở ra đời của nhà nước là do:",
    "options": [
      "Yêu cầu tổ chức, tập hợp lực lượng chống thiên tai, địch họa.",
      "Yêu cầu tập hợp lực lượng đấu tranh bảo vệ tổ quốc.",
      "Yêu cầu của đấu tranh giai cấp, là công cụ của giai cấp cầm quyền.",
      "Yêu cầu của quản lý xã hội, mở rộng hợp tác quốc tế."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 261,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Kiểu nhà nước đầu tiên trong lịch sử là:",
    "options": [
      "Nhà nước phong kiến.",
      "Nhà nước chủ nô.",
      "Nhà nước tư sản.",
      "Nhà nước vô sản."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 262,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nguyên nhân trực tiếp làm xuất hiện nhà nước là:",
    "options": [
      "Sự thỏa thuận của mọi tầng lớp trong xã hội.",
      "Những mâu thuẫn giai cấp không thể điều hòa được.",
      "Lý tưởng cao đẹp của các lãnh tụ cách mạng kết hợp các giai tầng lại với nhau.",
      "Do sự xung đột của các thế lực tôn giáo trong xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 263,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nhà nước có những chức năng cơ bản:",
    "options": [
      "Thống trị chính trị, xã hội, đối nội và đối ngoại.",
      "Trấn áp kẻ thù, bảo vệ lợi ích giai cấp.",
      "Bảo vệ lợi ích giai cấp và đối ngoại.",
      "Đối ngoại và trấn áp kể thù."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 264,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cách mạng xã hội là:",
    "options": [
      "Là sự thay đổi chủ yếu vế chất, từ hình thái kinh tế - xã hội cũ, lên hình thái kinh tế -xã hội mới; Là thời cơ, bước ngoặt giải quyết mâu thuẫn và lợi ích giai cấp.",
      "Là sự thay đổi to lớn về chất, từ hình thái kinh tế - xã hội này, sang hình thái kinh tế - xã hội khác; Là bước tiến quyết định trong giải quyết mâu thuẫn, đối kháng giai cấp.",
      "Sự thay đổi căn bản về chất, từ hình thái kinh tế - xã hội này, lên hình thái kinh tế - xã hội cao hơn; Là đỉnh cao, điểm nút giải quyết mâu thuẫn, đối kháng giai cấp.",
      "Là sự thay đổi thật sự về chất, từ hình thái kinh tế - xã hội thấp lên hình thái kinh tế - xã hội cao; Là thời điểm quyết định giải quyết mâu thuẫn và đối kháng giai cấp."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 265,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò của cách mạng xã hội là:",
    "options": [
      "Phương thức, động lực của phát triển xã hội, tạo nên các nấc thang của tiến bộ lịch sử nhân loại.",
      "Con đường, biện pháp của phát triển xã hôi, tạo nên các cột mốc ghi dấu tiến bộ của lịch sử nhân loại.",
      "Hình thức, xu hướng của phát triển xã hội, tạo nên các điều kiện hình thành tiến bộ lich sử nhân loại.",
      "Xu thế và cơ sở của phát triển xã hội, tạo nên các tiền đề của tiến bộ lịch sử nhân loại."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 266,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nguyên nhân sâu xa dẫn đến cách mạng xã hội là:",
    "options": [
      "Mâu thuẫn về quan điểm chính trị giữa những lực lượng xã hội khác nhau.",
      "Mâu thuẫn giữa giai cấp cách mạng và giai cấp phản cách mạng.",
      "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất.",
      "Mâu thuẫn giữa nhân dân nghèo khổ với giới quan chức giàu có."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 267,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Quan điểm của chủ nghĩa duy vật lịch sử, con người là:",
    "options": [
      "Một thực thể tự nhiên mang đặc tính xã hội.",
      "Một loài động vật bậc cao có lý trí.",
      "Một thực thể tự nhiên thoát khỏi loài động vật.",
      "Một bộ phận của giới tự nhiên biết sản xuất vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 268,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Theo C.Mác: Trong tính hiện thực của nó, bản chất con người là:",
    "options": [
      "Tổng hòa các mặt thiện và ác.",
      "Tổng hòa các yếu tố tự nhiên và xã hội.",
      "Tổng hòa các tính chất di truyền và rèn luyện.",
      "Tổng hòa những quan hệ xã hội."
    ],
    "answer": 3,
    "explanation": "C. Mác: 'Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội'."
  },
  {
    "id": 269,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Con người sẽ bộc lộ được bản chất xã hội của mình khi:",
    "options": [
      "Khi tồn tại trong các quan hệ xã hội.",
      "Khi thoát ly khỏi điều kiện lịch sử nhất định.",
      "Khi tồn tại trong các quan hệ của tự nhiên.",
      "Khi hoạt tách rời quan hệ xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 270,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Các cá nhân không hòa tan với nhau trong tập thể là do:",
    "options": [
      "Do có nhu cầu khác nhau.",
      "Do có lợi ích và mục đích khác nhau.",
      "Do có nhân cách khác nhau.",
      "Do có hoàn cảnh khác nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 271,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò của quần chúng nhân dân trong lịch sử:",
    "options": [
      "Là chủ thể sáng tạo ra của cải vật chất cho xã hội tồn tại, phát triển.",
      "Là chủ thế sáng tạo chân chính ra lịch sử, quyết định sự phát triển của lịch sử.",
      "Là chủ thể của các cuộc cách mạng xã hội, đưa xã hội phát triển.",
      "Là chủ thể đấu tranh giai cấp, là động lực phát triển của lịch sử."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 272,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò sáng tạo lịch sử của quần chúng nhân dân biểu hiện:",
    "options": [
      "Là lực lượng sản xuất vật chất cơ bản của mọi xã hôi; cải tạo thế giới tự nhiên; cải tạo chính bản thân con người.",
      "Là lực lượng sản xuất vật chất cơ bản của xã hội; thực hiện đấu trang giai cấp trong xã hội; tiến hành các cuộc chiến tranh trong lịch sử.",
      "Là lực lượng sản xuất vất chất cơ bản của mọi xã hôi; sáng tạo ra các giá trị tinh thần của xã hôi; động lực cơ bản của mọi cuộc cách mạng trong lịch sử.",
      "Là lực lượng sản xuất vật chất cơ bản của xã hội; thực hiện các cuộc đấu tranh giải phóng dân tộc; gìn giữ hòa bình thề giới."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 273,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Lãnh tụ là:",
    "options": [
      "Người giầu nhất, có tài năng và đạo đức nhất trong giai cấp bị trị.",
      "Người nghèo nhất, cách mạng nhất trong giai cấp bị trị.",
      "Cá nhân năng lực và phẩm chất kiệt xuất về một lĩnh vực hoạt động nhất định.",
      "Cá nhân kiệt xuất do phong trào cách mạng của quần chúng nhân dân tạo ra."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 274,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Theo quan điểm triết học Mác – Lênin, vai trò quyết định lịch sử thuộc về:",
    "options": [
      "Các lãnh tụ, vĩ nhân kiệt xuất.",
      "Quần chúng nhân dân.",
      "Các giai cấp bị trị có tinh thần cách mạng triệt để nhất.",
      "Các chính đảng cách mạng, có sự ủng hộ đông đảo của quần chúng nhân dân trong xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 275,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Những phẩm chất cơ bản mà người lãnh tụ của quần chúng nhân dân cần có là:",
    "options": [
      "Trí tuệ uyên bác vượt trội; Năng lực tổ chức, tập hợp quần chúng; Phẩm chất đạo đức, ý chí phục vụ nhân dân.",
      "Trí tuệ thông minh, sáng suốt; Được quần chúng tín nhiệm, bầu lên; Phẩm chất đạo đức hiền lành, trung thực.",
      "Trí tuệ năng động, sáng tạo; Thương yêu quần chúng, nhân dân; Phẩm chất trong sáng, hòa đồng với giai cấp và dân tộc.",
      "Trí tuệ nhìn xa, trông rộng; Năng lực chuyên môn vững vàng; Phẩm chất thẳng thắn, trung thực."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 276,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Thực chất của cuộc đấu tranh giai cấp là nhằm giải quyết mâu thuẫn về lợi ích giữa các giai cấp:",
    "options": [
      "Giữa giai cấp bóc lột và giai cấp bị bóc lột.",
      "Giữa giai cấp thống trị và giai cấp bị trị.",
      "Giữa giai cấp cơ bản và giai cấp không cơ bản.",
      "Giữa giai cấp bóc lột và giai cấp không cơ bản."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 277,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Đấu tranh giai cấp xảy ra có nguyên nhân sâu xa từ sự xung đột lợi ích trong lĩnh vực:",
    "options": [
      "Tôn giáo.",
      "Kinh tế.",
      "Chính trị.",
      "Văn hóa."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 278,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Mục đích cuối cùng của cuộc đấu tranh giai cấp của giai cấp vô sản là:",
    "options": [
      "Thực hiện chuyên chính vô sản.",
      "Xóa bỏ chế độ người bóc lột người.",
      "Lật đổ chế độ tư bản chủ nghĩa.",
      "Thiết lập quyền thống trị của giai cấp vô sản trên toàn thế giới."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 279,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nét khác biệt cơ bản nhất của nhà nước vô sản (NNVS) so với các nhà nước trước đó là:",
    "options": [
      "NNVS không củng cố sự thống trị về chính trị, mà chỉ lo xây dựng kinh tế nhằm tăng năng xuất lao động xã hội.",
      "NNVS chỉ chăm lo đến đời sống kinh tế và quyền lực chính trị mà không quan tâm đời sống tinh thần của xã hội.",
      "NNVS chỉ bảo vệ quyền lợi của người lao động.",
      "NNVS không chỉ bảo vệ lợi ích của người lao động mà còn bảo vệ lợi ích hợp pháp của cả giai cấp khác trong xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 280,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Thành tựu to lớn mà một cuộc cách mạng xã hội mang lại là:",
    "options": [
      "Xóa bỏ quan hệ sản xuất cũ, thiết lập quan hệ sản xuất mới phù hợp với sự phát triển của lực lượng sản xuất.",
      "Xóa bỏ chế độ người bóc lột người.",
      "Đưa nhân dân lao động lên nắm chính quyền.",
      "Buộc giai cấp thống trị phải có những cải cách tiến bộ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 281,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cách mạng vô sản là một cuộc cách mạng xã hội mới về chất, vì:",
    "options": [
      "Vì nó lôi kéo được đông đảo quần chúng cần lao tham gia giành chính quyền.",
      "Vì nó do giai cấp vô sản lãnh đạo.",
      "Vì nó sử dụng bạo lực cách mạng để giành lấy chính quyền.",
      "Vì nó sẽ xóa bỏ hoàn toàn chế độ người bóc lột người."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 282,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Quan niệm “Hiền dữ phải đâu là tính sẵn, phần nhiều do giáo dục mà nên”, nhằm khẳng định bản chất con người do:",
    "options": [
      "Yếu tố sinh học.",
      "Yếu tố xã hội.",
      "Yếu tố sinh học và xã hội.",
      "Không phải yếu tố sinh học và xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 283,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Quan niệm truyền thống “ở bầu thì tròn, ở ống thì dài” là nhằm khẳng định:",
    "options": [
      "Hình dạng của các loài sinh vật phụ thuộc vào nơi nó ở.",
      "Vai trò của các quan hệ xã hội đối với việc hình thành bản chất mỗi người.",
      "Vai trò chủ thể của con người trong lịch sử.",
      "Quy luật sinh học là quy luật duy nhất chi phối vạn vật trong vũ trụ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 284,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cơ sở lí luận nền tảng của đường lối xây dựng chủ nghĩa xã hội của Đảng Cộng sản Việt Nam là:",
    "options": [
      "Học thuyết về giai cấp và đấu tranh giai cấp của triết học Mác-Lênin.",
      "Phép biện chứng duy vật.",
      "Học thuyết về hình thái kinh tế-xã hội.",
      "Chủ nghĩa duy vật lịch sử."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 285,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Hiểu vấn đề “bỏ qua” chế độ tư bản chủ nghĩa ở Việt Nam là:",
    "options": [
      "Là sự “bỏ qua” việc xác lập địa vị thống trị của quan hệ sản xuất tư bản chủ nghĩa.",
      "Là “bỏ qua” sự phát triển của lực lượng sản xuất.",
      "Là sự phát triển tuần tự.",
      "Bỏ qua kiến trúc thượng tầng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 286,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Đặc điểm lớn nhất của thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam là:",
    "options": [
      "Nhiều thành phần xã hội đan xen tồn tại.",
      "Lực lượng sản xuất chưa phát triển.",
      "Năng xuất lao động thấp.",
      "Từ một nền sản xuất nhỏ là phổ biến quá độ lên chủ nghĩa xã hội không qua chế độ tư bản chủ nghĩa."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 287,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Tiêu chí cơ bản để đánh giá tiến bộ xã hội là:",
    "options": [
      "Sự phát triển đồng bộ về kinh tế, chính trị, văn hóa và xã hội.",
      "Sự phát triển của sản xuất vật chất và sản xuất tinh thần.",
      "Sự phát triển toàn diện con người.",
      "Sự phát triển của lực lượng sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 288,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Bài học kinh nghiệm mà Đảng Cộng sản Việt Nam đã rút ra trong công cuộc đổi mới là:",
    "options": [
      "Đổi mới kinh tế trước, đổi mới chính trị sau.",
      "Đổi mới chính trị trước, đổi mới kinh tế sau.",
      "Kết hợp đổi mới kinh tế và đổi mới chính trị.",
      "Chỉ cần đổi mới chính trị."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 289,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trình độ của lực lượng sản xuất thể hiện ở:",
    "options": [
      "Trình độ công cụ lao động và trình độ kinh nghiệm kỹ năng của người lao động.",
      "Trình độ tổ chức và phân phối sản phẩm.",
      "Trình độ tổ chức, quản lý xã hội.",
      "Trình độ tổ chức, phân phối sản phẩm và quản lý xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 290,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Tiến lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là:",
    "options": [
      "Phù hợp với quá trình lịch sử - tự nhiên.",
      "Không phù hợp với quá trình lịch sử - tự nhiên.",
      "Vận dụng sáng tạo của Đảng Cộng sản Việt Nam.",
      "Đi theo mô hình một số nước trên thế giới."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 291,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Chọn câu trả lời đúng theo quan điểm duy vật lịch sử. Mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất là mối quan hệ:",
    "options": [
      "Luôn luôn thống nhất với nhau.",
      "Luôn luôn đối lập loại trừ nhau.",
      "Thống nhất và đấu tranh của các mặt đối lập.",
      "Có lúc hoàn toàn đối lập nhau, có khi hoàn toàn thống nhất với nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 292,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trong mối quan hệ giữa “lực lượng sản xuất và quan hệ sản xuất” thì:",
    "options": [
      "Lực lượng sản xuất là nội dung- quan hệ sản xuất là hình thức.",
      "Quan hệ sản xuất là nội dung- lực lượng sản xuất là hình thức.",
      "Lực lượng sản xuất và quan hệ sản xuất đều là nội dung.",
      "Lực lượng sản xuất và quan hệ sản xuất đều là hình thức."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 293,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trong sự nghiệp xây dựng chủ nghĩa xã hội ở Việt Nam, chúng ta cần phải tiến hành:",
    "options": [
      "Phát triển lực lượng sản xuất đạt trình độ tiên tiến để tạo cơ sở cho việc xây dựng quan hệ sản xuất mới.",
      "Chủ động xây dựng quan hệ sản xuất mới để tạo cơ sở thúc đẩy lực lượng sản xuất phát triển.",
      "Kết hợp đồng thời phát triển lực lượng sản xuất với từng bước xây dựng quan hệ sản xuất mới phù hợp.",
      "Củng cố xây dựng kiến trúc thượng tầng mới cho phù hợp với cơ sở hạ tầng."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 294,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Thực chất của quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng:",
    "options": [
      "Quan hệ giữa kinh tế và văn hóa.",
      "Quan hệ giữa kinh tế và chính trị.",
      "Quan hệ giữa vật chất và tinh thần.",
      "Quan hệ giữa tồn tại xã hội với ý thức xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 295,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Phạm trù hình thái kinh tế - xã hội là phạm trù được áp dụng:",
    "options": [
      "Cho mọi xã hội trong lịch sử.",
      "Cho một xã hội cụ thể.",
      "Cho xã hội tư bản chủ nghĩa.",
      "Cho xã hội cộng sản chủ nghĩa."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 296,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Chủ trương thực hiện nhất quán cơ cấu kinh tế nhiều thành phần ở Việt Nam hiện nay là:",
    "options": [
      "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất.",
      "Nhằm đáp ứng yêu cầu hội nhập kinh tế thế giới.",
      "Nhằm thúc đẩy sự phát triển kinh tế.",
      "Nhằm phát triển quan hệ sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 297,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Lý luận hình thái kinh tế – xã hội là cơ sở khoa học để:",
    "options": [
      "Giải thích đầy đủ mọi hiện tượng xã hội.",
      "Giải thích chính xác và đầy đủ mọi hiện tượng xã hội.",
      "Xác lập phương pháp luận khoa học chung nhất để giải thích các hiện tượng xã hội.",
      "Xác lập phương pháp luận chung ở tầm “duy nhất khoa học” cho mọi quá trình nghiên cứu."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 298,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Hãy chỉ ra luận điểm thể hiện quan điểm duy vật lịch sử:",
    "options": [
      "Chỉ dựa vào các quan hệ kinh tế cũng có thể giải thích đầy đủ bất kỳ học thuyết chính trị nào.",
      "Chỉ dựa vào các quan hệ kinh tế hiện có cũng có thể giải thích đầy đủ bất kỳ tư tưởng pháp quyền nào.",
      "Mọi học thuyết đạo đức có từ trước đến nay, xét đến cùng, đều là sản phẩm của tình hình kinh tế lúc bấy giờ.",
      "Hoạt động của con người khác với động vật là có ý thức, vì thế ý thức của con người quyết định sự tồn tại của họ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 299,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Xét đến cùng, nhân tố có ý nghĩa quyết định sự thắng lợi của một trật tự xã hội mới là:",
    "options": [
      "Năng xuất lao động.",
      "Sức mạnh của luật pháp.",
      "Hiệu quả hoạt động của hệ thống chính trị.",
      "Sự điều hành và quản lý xã hội của Nhà nước."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 300,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trong tư tưởng truyền thống Việt Nam, vấn đề về con người được quan tâm nhiều nhất:",
    "options": [
      "Vấn đề bản chất con người.",
      "Vấn đề đạo lý làm người.",
      "Vấn đề quan hệ giữa linh hồn và thể xác.",
      "Vấn đề bản chất cuộc sống."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 301,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Thuật ngữ “Quan hệ sản xuất” lúc đầu được C.Mác gọi là:",
    "options": [
      "Quan hệ lao động.",
      "Quan hệ xã hội.",
      "Quan hệ giao tiếp.",
      "Hình thức giao tiếp."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 302,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nhân tố bảo đảm cho sự thắng lợi cuối cùng của một chế độ xã hội là:",
    "options": [
      "Có nền khoa học tiên tiến.",
      "Có nhân tố chính trị tiến bộ.",
      "Có nền văn hoá tiên tiến, đậm đà bản sắc dân tộc.",
      "Có thể tạo ra năng suất lao động cao hơn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 303,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Trong thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta, tất yếu phải xây dựng một nền kinh tế nhiều thành phần dựa trên cơ sở nhiều loại hình sở hữu khác nhau, vì:",
    "options": [
      "Các thành phần đều cần cho sự phát triển kinh tế.",
      "Không thể ngay lập tức xoá bỏ được các thành phần kinh tế ngoài công hữu.",
      "Kinh nghiệm các nước trên thế giới cho thấy sự tồn tại của nền kinh tế nhiều thành phần là tất yếu.",
      "Thực tế phát triển lực lượng sản xuất ở nước ta còn đang ở nhiều trình độ khác nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 304,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Giá trị khoa học của học thuyết hình thái kinh tế - xã hội là:",
    "options": [
      "Giúp hiểu bản chất con người và xã hội loài người.",
      "Chỉ ra quy luật vận động của tự nhiên và xã hội.",
      "Giúp hiểu đầy đủ, cụ thể từng thời đại lịch sử, từng quốc gia dân tộc.",
      "Chỉ ra sự phát triển của lịch sử nhân loại là một quá trình lịch sử - tự nhiên."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 305,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Bổ sung để được một câu đúng theo quan điểm triết học mácxít: “Phương thức sản xuất là cách thức con người . . .”",
    "options": [
      "Quan hệ với tự nhiên.",
      "Tái sản xuất giống loài.",
      "Quan hệ với nhau trong sản xuất.",
      "Thực hiện sản xuất vật chất ở mỗi giai đoạn lịch sử."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 306,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Lực lượng sản xuất có vai trò như thế nào trong một hình thái kinh tế - xã hội?",
    "options": [
      "Nền tảng vật chất - kỹ thuật của xã hội.",
      "Bảo vệ trật tự kinh tế của xã hội.",
      "Quy định thái độ và hành vi của con người trong xã hội.",
      "Quy định mọi quan hệ xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 307,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò của quan hệ sản xuất trong một hình thái kinh tế - xã hội là:",
    "options": [
      "Quy định cơ sở vật chất - kỹ thuật.",
      "Duy trì và bảo vệ cơ sở hạ tầng.",
      "Quy định trình độ (tính chất) của lực lượng sản xuất và kiến trúc thượng tầng của xã hội.",
      "Quy định mọi quan hệ xã hội, nói lên thực chất của hình thái kinh tế - xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 308,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Vai trò của kiến trúc thượng tầng có trong một hình thái kinh tế - xã hội là:",
    "options": [
      "Duy trì, bảo vệ cho cơ sở hạ tầng sinh ra nó.",
      "Luôn kìm hãm sự phát triển cơ sở hạ tầng.",
      "Luôn thúc đẩy sự phát triển cơ sở hạ tầng.",
      "Phát triển kinh tế"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 309,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Cơ sở phân chia lịch sử của nhân loại trong Triết học Mác là:",
    "options": [
      "Hình thức nhà nước.",
      "Hình thức tôn giáo.",
      "Hình thái ý thức xã hội.",
      "Hình thái kinh tế - xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 310,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Nguồn gốc vận động và phát triển của hình thái kinh tế - xã hội là:",
    "options": [
      "Sự tăng lên không ngừng của năng xuất lao động.",
      "Sự phát triển liên tục của lực lượng sản xuất.",
      "Quần chúng nhân dân không ngừng nổi dậy đấu tranh chống các thế lực phản động trong xã hội.",
      "Mâu thuẫn giai - tầng trong xã hội, sự thay đổi của quan hệ sản xuất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 311,
    "chapter": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "tag": "",
    "question": "Giá trị khoa học của học thuyết hình thái kinh tế - xã hội là:",
    "options": [
      "Giúp hiểu bản chất con người và xã hội loài người.",
      "Chỉ ra quy luật vận động của tự nhiên và xã hội.",
      "Giúp hiểu đầy đủ, cụ thể từng thời đại lịch sử, từng quốc gia dân tộc.",
      "Chỉ ra sự phát triển của lịch sử nhân loại là một quá trình lịch sử - tự nhiên."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 312,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO2",
    "question": "Về mặt triết học, định luật bảo toàn và chuyển hoá năng lượng chứng minh cho quan điểm:",
    "options": [
      "Quan điểm siêu hình phủ nhận sự vận động, phát triển của thế giới vật chất",
      "Quan điểm duy tâm phủ nhận sự vận động là khách quan của thế giới vật chất",
      "Quan điểm biện chứng duy vật thừa nhận sự chuyển hoá lẫn nhau của giới tự nhiên vô cơ.",
      "Quan điểm biện chứng duy vật thừa nhận thế giới không có sự chuyển hóa của giới tự nhiên vô cơ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 313,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO3",
    "question": "Có quan niệm cho rằng: Thế giới bao gồm trần gian, thiên đường và địa ngục. Theo quan điểm của chủ nghĩa duy vật biện chứng quan niệm đó đúng hay sai:",
    "options": [
      "Đúng.",
      "Sai.",
      "Vừa đúng vừa sai.",
      "Tất cả đều sai."
    ],
    "answer": 1,
    "explanation": "Theo CNDV biện chứng, thế giới vật chất là duy nhất và thống nhất, không có thiên đường hay địa ngục siêu nhiên."
  },
  {
    "id": 314,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO2",
    "question": "Trong các yếu tố sau, yếu tố nào là cơ sở trực tiếp hình thành thế giới quan?",
    "options": [
      "Tri thức",
      "Niềm tin",
      "Lý tưởng",
      "Tình cảm"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 315,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO2",
    "question": "Triết học Mác - Lênin có chức năng:",
    "options": [
      "Chức năng thế giới quan và phương pháp luận",
      "Chức năng hoàn thiện lý trí và nâng cao phẩm chất đạo đức cách mạng",
      "Chức năng khoa học của mọi khoa học",
      "Chức năng chỉ đạo mọi hoạt động thực tiễn"
    ],
    "answer": 0,
    "explanation": "Triết học Mác - Lênin có hai chức năng cơ bản là chức năng thế giới quan và chức năng phương pháp luận chung nhất."
  },
  {
    "id": 316,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO1",
    "question": "Phép biện chứng duy vật được thể hiện trong triết học do:",
    "options": [
      "Mác và Ph. Ăngghen xây dựng",
      "Mác xây dựng",
      "Ph. Ăngghen xây dựng",
      "Mác và Ph. Ăngghen và Lênin xây dựng"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 317,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO3",
    "question": "Thành tựu vĩ đại nhất của cuộc cách mạng trong triết học do Mác và Angghen thực hiện là gì?",
    "options": [
      "Xây dựng phép biện chứng duy vật, chấm dứt sự thống trị của phép biện chứng duy tâm Hêghen.",
      "Xây dựng chủ nghĩa duy vật về lịch sử, làm sáng rõ lịch sử tồn tại và phát triển của xã hội loài người.",
      "Phát hiện ra lịch sử xã hội lòai người là lịch sử đấu tranh giai cấp, và đấu tranh giai cấp sẽ dẫn đến cách mạng vô sản nhằm xóa bỏ xã hội có người bóc lột người.",
      "Phát minh ra giá trị thặng dư, giúp hiểu rõ thực chất của xã hội tư bản chủ nghĩa."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 318,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO3",
    "question": "Tác phẩm được coi là “văn kiện có tính chất cương lĩnh đầu tiên của chủ nghĩa Mác” là:",
    "options": [
      "Sự khốn cùng của triết học.",
      "Gia đình thần thánh.",
      "Tuyên ngôn của Đảng Cộng sản.",
      "Tư bản"
    ],
    "answer": 2,
    "explanation": "'Tuyên ngôn của Đảng Cộng sản' (1848) là tác phẩm đánh dấu sự ra đời và là văn kiện cương lĩnh đầu tiên của chủ nghĩa Mác."
  },
  {
    "id": 319,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO1",
    "question": "Trường phái triết học nào cho rằng bản chất của thế giới là vật chất?",
    "options": [
      "Nhất nguyên duy vật",
      "Nhất nguyên duy tâm",
      "Nhị nguyên",
      "Đa nguyên"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 320,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO1",
    "question": "Mặt thứ nhất vấn đề cơ bản của triết học trả lời câu hỏi:",
    "options": [
      "Con người có khả năng nhận thức được thế giới hay không?",
      "Con người có tồn tại không?",
      "Giữa ý thức và vật chất, cái nào có trước, cái nào có sau, cái nào quyết định cái nào?",
      "Linh hồn con người có tồn tại không?"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 321,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO2",
    "question": "Theo triết học Mác - Lênin, đối tượng nghiên cứu của triết học là……",
    "options": [
      "Quy luật kinh tế, chính trị",
      "Quy luật chung nhất",
      "Quy luật cụ thể",
      "Quy luật"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 322,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO1",
    "question": "Điền từ vào chỗ trống: …… khẳng định về nguyên tắc con người có thể hiểu được bản chất của sự vật.",
    "options": [
      "Chủ nghĩa duy tâm",
      "Chủ nghĩa duy vật",
      "Thuyết khả tri",
      "Thuyết bất khả tri"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 323,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO2",
    "question": "Về mặt triết học, định luật bảo toàn và chuyển hoá năng lượng chứng minh cho quan điểm:",
    "options": [
      "Quan điểm siêu hình phủ nhận sự vận động, phát triển của thế giới vật chất",
      "Quan điểm duy tâm phủ nhận sự vận động là khách quan của thế giới vật chất",
      "Quan điểm biện chứng duy vật thừa nhận sự chuyển hoá lẫn nhau của giới tự nhiên vô cơ.",
      "Quan điểm biện chứng duy vật thừa nhận thế giới không có sự chuyển hóa của giới tự nhiên vô cơ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 324,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO2",
    "question": "Chọn đáp án đúng. Triết học là:",
    "options": [
      "là hệ thống tri thức lý luận chung nhất của con người về thế giới và vị trí của con người trong thế giới.",
      "là khoa học nghiên cứu về khả năng tư duy của con người.",
      "là khoa học về chính trị.",
      "là khoa học nghiên cứu về đấu tranh giai cấp và cách mạnh xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 325,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO1",
    "question": "Mặt thứ hai vấn đề cơ bản của triết học trả lời câu hỏi:",
    "options": [
      "Con người có khả năng nhận thức được thế giới hay không?",
      "Con người có tồn tại không?",
      "Giữa ý thức và vật chất, cái nào có trước, cái nào có sau, cái nào quyết định cái nào?",
      "Linh hồn con người có tồn tại không?"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 326,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO3",
    "question": "Triết học nào xem thường kinh nghiệm, xa rời cuộc sống?",
    "options": [
      "Triết học kinh nghiệm",
      "Triết học duy vật",
      "Triết học kinh viện",
      "Triết học siêu hình"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 327,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO1",
    "question": "Điền cụm từ vào chỗ trống:\nVới sự ra đời của triết học Mác – Lênin: Triết học là hệ thống quan điểm lý luận…về thế giới và vị trí con người trong thế giới đó, là khoa học về những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
    "options": [
      "Chung",
      "Chung nhất",
      "Phổ biến",
      "Sâu sắc nhất"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 328,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO1",
    "question": "Điền từ vào chỗ trống: …… khẳng định về nguyên tắc con người có thể hiểu được bản chất của sự vật.",
    "options": [
      "Chủ nghĩa duy tâm",
      "Chủ nghĩa duy vật",
      "Thuyết khả tri",
      "Thuyết bất khả tri"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 329,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO2",
    "question": "Thế giới quan và phương pháp luận mà triết học Mác – Lênin trang bị cho con người tính chất cơ bản:",
    "options": [
      "Tính sáng tạo và tiến bộ",
      "Tính cách mạng và khoa học",
      "Tính kế thừa và cụ thể",
      "Tính lịch sử và tính đảng"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 330,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO1",
    "question": "Điền vào chỗ trống:\nPh. Ăngghen viết: “Vấn đề cơ bản lớn mọi triết học, đặc biệt là của triết học hiện đại, là vấn đề quan hệ giữa…”",
    "options": [
      "Lý và khí",
      "Linh hồn và thể xác",
      "Tư duy với hiện tại",
      "Tư duy với tồn tại"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 331,
    "chapter": "Đề kiểm tra số 1",
    "tag": "CLO2",
    "question": "Chọn đáp án đúng. Triết học là:",
    "options": [
      "là hệ thống tri thức lý luận chung nhất của con người về thế giới và vị trí của con người trong thế giới.",
      "là khoa học nghiên cứu về khả năng tư duy của con người.",
      "là khoa học về chính trị.",
      "là khoa học nghiên cứu về đấu tranh giai cấp và cách mạnh xã hội."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 332,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Đối lập với quan điểm phát triển trong nhận thức và hoạt động thực tiễn là:",
    "options": [
      "Quan điểm bảo thủ, định kiến.",
      "Quan điểm toàn diện.",
      "Quan điểm lịch sử - cụ thể.",
      "Quan điểm chủ quan, duy ý chí."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 333,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO2",
    "question": "“Không thể tắm hai lần trên một dòng sông” của triết gia Hy Lạp cổ đại Hêraclít muốn ám chỉ điều gì?",
    "options": [
      "Sự vận động và biến đổi không ngừng của sự vật, hiện tượng",
      "Đề cập đến sự vô cùng, vô tận của sự vật, hiện tượng",
      "Sự biến đổi và vận động về tốc độ chảy của dòng nước",
      "Sự vận động và biến đổi nhất thời của dòng sông"
    ],
    "answer": 0,
    "explanation": "Luận điểm của Hêraclít nhấn mạnh sự vận động, biến đổi không ngừng của vạn vật trong vũ trụ."
  },
  {
    "id": 334,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Quy luật được xem là “hạt nhân của phép biện chứng” là:",
    "options": [
      "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      "Quy luật Lượng - Chất",
      "Quy luật phủ định của phủ định",
      "Quy luật đấu tranh giai cấp"
    ],
    "answer": 0,
    "explanation": "V.I. Lênin khẳng định: Quy luật thống nhất và đấu tranh của các mặt đối lập là hạt nhân của phép biện chứng duy vật."
  },
  {
    "id": 335,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Đêmôcrít - nhà triết học cổ Hy Lạp - quan niệm vật chất là gì?",
    "options": [
      "Nước",
      "Lửa",
      "Không khí",
      "Nguyên tử"
    ],
    "answer": 3,
    "explanation": "Đêmôcrít (Hy Lạp cổ đại) cho rằng nguyên tử là phần tử vật chất nhỏ nhất, không thể phân chia cấu tạo nên vạn vật."
  },
  {
    "id": 336,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Theo quan niệm triết học duy vật biện chứng, không gian là gì?",
    "options": [
      "Mô thức của trực quan cảm tính;",
      "Khái niệm của tư¬ duy lý tính;",
      "Thuộc tính của vật chất",
      "Một dạng vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 337,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại chỉ rõ:",
    "options": [
      "Nguồn gốc của sự vận động, phát triển của các sự vật trong tự nhiên, xã hội, tư duy.",
      "Khuynh hướng của sự vận động, phát triển của các sự vật, quá trình trong tự nhiên, xã hội, tư duy.",
      "Phương thức chung của các quá trình vận động, phát triển trong tự nhiên, xã hội và tư duy.",
      "Động lực của sự vận động, phát triển của các sự vật, hiện tượng, quá trình trong tự nhiên, xã hội, tư duy."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 338,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Chọn câu trả lời đúng.",
    "options": [
      "Ý thức là thuộc tính của mọi dạng vật chất.",
      "Ý thức là sự phản ánh nguyên xi hiện thực khách quan.",
      "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan.",
      "Ý thức là sản phẩm của Thượng đế"
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 339,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Chọn câu trả lời đúng.",
    "options": [
      "Ý thức là thuộc tính của mọi dạng vật chất.",
      "Ý thức là sự phản ánh nguyên xi hiện thực khách quan.",
      "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan.",
      "Ý thức là sản phẩm của Thượng đế"
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 340,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Trong hoạt động thực tiễn, sai lầm của không xác định đúng mặt đối lập cơ bản của đối tượng, không có phương pháp phù hợp tạo động lực phát triển cho đối tượng là do không tôn trọng quy luật nào của phép biện chứng duy vật:",
    "options": [
      "Quy luật lượng – chất",
      "Quy luật phủ định của phủ định",
      "Quy luật mâu thuẫn",
      "Quy luật tự nhiên"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 341,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Sự tác động của ý thức đối với vật chất phải thông qua hoạt động gì của con người:",
    "options": [
      "Hoạt động tập trung trí tuệ",
      "Hoạt động thực tiễn",
      "Hoạt động thực nghiệm khoa học",
      "Hoạt động cải tạo xã hội"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 342,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Nguyên nhân, nguyên cớ và điều kiện có quan hệ như thế nào?",
    "options": [
      "Khác nhau nhưng tồn tại trong sự quy định lẫn nhau.",
      "Giống nhau, về cơ bản.",
      "Mọi nguyên cớ đều là nguyên nhân; chúng tồn tại độc lập với điều kiện.",
      "A, B, C đều sai."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 343,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Sự tồn tại của các vật thể ở quá trình biến đổi: lâu hay mau, kế tiếp và chuyển hóa. Quá trình đó gọi là:",
    "options": [
      "Thời gian",
      "Không gian",
      "Quảng tính",
      "Vận động"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 344,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO2",
    "question": "Các tính chất chung của mâu thuẫn biện chứng:",
    "options": [
      "Tính khách quan; tính khoa học; tính lịch sử cụ thể.",
      "Tính khách quan; tính phổ biến; tính đa dạng, phong phú.",
      "Tính khách quan; tính chủ quan; tính chân lý.",
      "Tính khách quan; tính lý luận; tính thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 345,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Xác định quan niệm sai về thực tiễn:",
    "options": [
      "Thực tiễn là nguồn gốc của nhận thức.",
      "Thực tiễn là động lực của nhận thức.",
      "Thực tiễn là hoạt động vật chất và tinh thần của con người.",
      "Thực tiễn là tiêu chuẩn của chân lý."
    ],
    "answer": 0,
    "explanation": "Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý."
  },
  {
    "id": 346,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Lựa chọn câu đúng nhất theo quan điểm của CNDVBC.",
    "options": [
      "Vận động, không gian, thời gian là sản phẩm do ý chí con người tạo ra, do đó nó không phải là vật chất.",
      "Vận động không gian, thời gian không có tính vật chất.",
      "Vận động, không gian, thời gian là hình thức tồn tại của vật chất.",
      "Tất cả các câu đều sai"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 347,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO2",
    "question": "Quy luật phủ định của phủ định chỉ ra:",
    "options": [
      "Nguồn gốc của mọi sự vận động, phát triển trong tự nhiên, xã hội, tư duy.",
      "Khuynh hướng cơ bản, phổ biến của mọi vận động, phát triển trong tự nhiện xã hội, tư duy.",
      "Nguyên nhân cơ bản, phổ biên của sự vận động, phát triển trong tự nhiên, xã hội, tư duy",
      "Động lực cơ bản, phổ biến của sự vận động, phát triển tron g tự nhiên, xã hội, tư duy"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 348,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Theo quan điểm triết học mácxít, luận điểm nào sai?",
    "options": [
      "Mặt đối lập là những mặt có khuynh hướng trái ngược nhau.",
      "Mặt đối lập tạo thành mâu thuẫn biện chứng không nhất thiết phải có mối quan hệ với nhau trong một sự vật, một quá trình.",
      "Mặt đối lập tồn tại khách quan trong mọi sự vật.",
      "Mặt đối lập là cái vốn có của sự vật."
    ],
    "answer": 2,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 349,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Đêmôcrít - nhà triết học cổ Hy Lạp - quan niệm vật chất là gì?",
    "options": [
      "Nước",
      "Lửa",
      "Không khí",
      "Nguyên tử"
    ],
    "answer": 3,
    "explanation": "Đêmôcrít (Hy Lạp cổ đại) cho rằng nguyên tử là phần tử vật chất nhỏ nhất, không thể phân chia cấu tạo nên vạn vật."
  },
  {
    "id": 350,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO1",
    "question": "Sự tồn tại của các vật thể ở quá trình biến đổi: lâu hay mau, kế tiếp và chuyển hóa. Quá trình đó gọi là:",
    "options": [
      "Thời gian",
      "Không gian",
      "Quảng tính",
      "Vận động"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 351,
    "chapter": "Đề kiểm tra số 2",
    "tag": "CLO3",
    "question": "Tính năng động sáng tạo của ý thức, thể hiện qua câu nói:",
    "options": [
      "Cái khó ló cái khôn",
      "Góp gió thành bão, góp cây nên rừng.",
      "Có công mài sắt có ngày nên kim.",
      "Chim khôn hót tiếng rảnh rang, người khôn nói tiếng dịu dàng dễ nghe."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 352,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Theo quan điểm triết học mácxít, khẳng định nào sau đây sai:",
    "options": [
      "Vật chất vận động do sự tác động của những nhân tố bên ngoài nó gây ra.",
      "Vật chất vận động do sự tác động của những nhân tố bên trong nó gây ra.",
      "Vật chất chỉ có thể tồn tại thông qua vận động.",
      "Bản thân tư duy cũng là sản phẩm của sự vận động của vật chất."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 353,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Bổ sung để được một câu đúng theo quan điểm triết học mácxít: “Tri thức của con người ngày càng hoàn thiện là do . . .”",
    "options": [
      "thế giới đang vận động bộc lộ càng nhiều tính quy định.",
      "sự hoạt động thực tiễn của con người ngày càng sâu rộng.",
      "có hệ thống tri thức (chân lý) trước đó làm tiền đề.",
      "khả năng tổng hợp của trí tuệ của con người trong thời đại mới."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 354,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Khẳng định nào sau đây là sai:",
    "options": [
      "Triết học Mác là sự kết hợp phép biện chứng của Hêghen và chủ nghĩa duy vật của Phoi-ơ-bắc",
      "Triết học Mác có sự thống nhất giữa phương pháp biện chứng và thế giới quan duy vật.",
      "Triết học Mác kế thừa và cải tạo phép biện chứng của Hêghen trên cơ sở duy vật.",
      "Triết học Mác là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội, tư duy."
    ],
    "answer": 3,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 355,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO3",
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, vật chất với tư cách là phạm trù triết học có đặc tính gì?",
    "options": [
      "Vô hạn, vô tận, vĩnh viễn tồn tại, độc lập với ý thức",
      "Có giới hạn, có sinh ra và có mất đi",
      "Tồn tại cảm tính trong thời gian nhất định",
      "Vĩnh viễn tồn tại, phụ thuộc vào ý thức của con người"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 356,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Theo quan điểm triết học mácxít, luận điểm nào sau đây sai:",
    "options": [
      "Thực tiễn là nguồn gốc của nhận thức, vì qua thực tiễn thuộc tính bản chất của đối tượng được bộc lộ ra.",
      "Thực tiễn là động lực của nhận thức, vì nó đòi hỏi tư duy con người phải giải đáp những vấn đề đặt ra.",
      "Thực tiễn là hoạt động vật chất và tinh thần của con người, đồng thời là tiêu chuẩn của chân lý.",
      "Quan điểm về thực tiễn là quan điểm cơ bản và xuất phát của lý luận nhận thức mácxít."
    ],
    "answer": 0,
    "explanation": "Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý."
  },
  {
    "id": 357,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Luận điểm nào sau đây xuất phát từ nội dung quy luật Lượng - chất:",
    "options": [
      "Khi chất của sự vật có sự thay đổi đến độ nào đó thì lượng của sự vật cũng thay đổi, sự vật mới xuất hiện với chất mới và lượng mới thống nhất với nhau.",
      "Chất của sự vật là cái dễ thay đổi hơn lượng của nó.",
      "Khi lượng của sự vật có sự thay đổi đến một mức độ nào đó thì chất của sự vật mới thay đổi.",
      "Lượng của sự vật không bao giờ thay đổi khi chất biến đổi."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 358,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Điều nào sau đây trái với tinh thần của chủ nghĩa duy vật biện chứng:",
    "options": [
      "Thế giới vật chất tồn tại vĩnh viễn và vô tận, không do ai sinh ra.",
      "Mọi bộ phận của thế giới đều liên hệ và chuyển hóa lẫn nhau.",
      "Chỉ có một thế giới duy nhất là thế giới vật chất.",
      "Thế giới vật chất bao gồm những bộ phận riêng biệt nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 359,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Theo quan niệm của chủ nghĩa duy vật biện chứng, các mối liên hệ có vai trò đối với sự tồn tại và phát triển của sự vật:",
    "options": [
      "Có vai trò khác nhau, nên chỉ cần biết một số mối liên hệ",
      "Có vai trò ngang bằng nhau",
      "Có vai trò khác nhau, cần phải xem xét mọi mối liên hệ",
      "Có vai trò ngang bằng nhau, nên chỉ cần xem xét một mối liên hệ"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 360,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO3",
    "question": "Câu nào sau đây muốn nói tính độc lập tương đối của ý thức:",
    "options": [
      "Có tiền mua Tiên cũng được",
      "Có tiền mua được tất cả mọi thứ",
      "Tiền không mua được tình yêu và nhân phẩm",
      "Tiền mua được giang sơn, địa vị xã hội"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 361,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Luận điểm nào sau đây không phù hợp với quan niệm biện chứng duy vật:",
    "options": [
      "Sự vận động, phát triển của sự vật là do các mâu thuẫn biện chứng gây ra.",
      "Các mâu thuẫn biện chứng khác nhau tác động không giống nhau đến quá trình vận động, phát triển của sự vật.",
      "Bản thân mỗi mâu thuẫn biện chứng đều trải qua ba giai đoạn: sinh thành, hiện hữu và giải quyết, Cả ba giai đoạn này đều gắn liền với bước nhảy về chất",
      "Phát triển xảy ra trong thế giới vật chất luôn mang tính tự thân."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 362,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Tính chất của sự phát triển gồm:",
    "options": [
      "Tính khách quan, tính phổ biến và tính đa dạng, phong phú.",
      "Tính khách quan, tính tuyệt đối và tính cụ thể.",
      "Tính tương đối và tính tuyệt đối.",
      "Tính lịch sử cụ thể và tính vĩnh cửu."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 363,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Nhận thức lý tính có tính chất:",
    "options": [
      "Trừu tượng, gián tiếp, khái quát, hời hợt.",
      "Trừu tượng, trực tiếp, khái quát, sâu sắc.",
      "Sâu sắc, trừu tượng, gián tiếp, khái quát.",
      "Sinh động, trừu tượng, gián tiếp, sâu sắc."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 364,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Bổ sung để được một câu đúng theo quan điểm triết học mácxít: “Tri thức của con người ngày càng hoàn thiện là do . . .”",
    "options": [
      "thế giới đang vận động bộc lộ càng nhiều tính quy định.",
      "sự hoạt động thực tiễn của con người ngày càng sâu rộng.",
      "có hệ thống tri thức (chân lý) trước đó làm tiền đề.",
      "khả năng tổng hợp của trí tuệ của con người trong thời đại mới."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 365,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO3",
    "question": "Người bị bệnh tâm thần ở mức độ nhẹ có ý thức hay không?",
    "options": [
      "Có",
      "Không",
      "Lúc có lúc không",
      "Không xác định"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 366,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Cơ sở tạo nên mối liên hệ phổ biến là:",
    "options": [
      "Tính thống nhất vật chất của thế giới",
      "Chủ thể nhận thức khách thể.",
      "Cảm giác của con người.",
      "Tính thống nhất tinh thần của thế giới"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 367,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO1",
    "question": "Theo Ăngghen, những phát minh lớn trong khoa học tự nhiên ảnh hưởng tới sự hình thành triết học duy vật biện chứng là:",
    "options": [
      "Định luật bảo toàn và chuyển hóa năng lượng, Thuyết tế bào, Định luật vạn vật hấp dẫn.",
      "Định luật bảo toàn và chuyển hóa năng lượng, Thuyết tế bào, Thuyết tiến hóa của Đácuyn.",
      "Định luật bảo toàn và chuyển hóa năng lượng, Định luật vạn vật hấp dẫn, Thuyết nhật tâm.",
      "Phát hiện ra nguyên tử, Phát hiện ra điện tử, Định luật bảo toàn và chuyển hoá năng lượng."
    ],
    "answer": 1,
    "explanation": "Ba phát minh vĩ đại thế kỷ XIX: Định luật bảo toàn & chuyển hóa năng lượng, Thuyết tế bào và Thuyết tiến hóa của Đác-uyn."
  },
  {
    "id": 368,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Xác định quan niệm chưa đúng về phủ định biện chứng:",
    "options": [
      "Phủ định có tính kế thừa",
      "Phủ định là chấm dứt sự phát triển.",
      "Phủ định đồng thời cũng là sự khẳng định",
      "Phủ định có tính khách quan, phổ biến"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 369,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Muốn có ý thức đúng thì chúng ta phải:",
    "options": [
      "Xuất phát từ thực tiễn khách quan.",
      "Xuất phát từ nguyện vọng chủ quan.",
      "Tự nghĩ ra rồi trao đổi với người khác.",
      "Tham khảo ý kiến người khác"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 370,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Khi nước chuyển từ trạng thái lỏng sang trạng thái khí tại 100 độ C được gọi là gì trong quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại là:",
    "options": [
      "Độ.",
      "Bước nhảy.",
      "Chuyển hoá.",
      "Tịnh tiến."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 371,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Điều nào sau đây trái với tinh thần của chủ nghĩa duy vật biện chứng:",
    "options": [
      "Thế giới vật chất tồn tại vĩnh viễn và vô tận, không do ai sinh ra.",
      "Mọi bộ phận của thế giới đều liên hệ và chuyển hóa lẫn nhau.",
      "Chỉ có một thế giới duy nhất là thế giới vật chất.",
      "Thế giới vật chất bao gồm những bộ phận riêng biệt nhau."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 372,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO1",
    "question": "Theo quan điểm triết học mácxít, luận điểm nào sau đây sai:",
    "options": [
      "CNDV thừa nhận nhận thức là sự phản ánh sáng tạo hiện thực khách quan vào trong đầu óc con người dựa trên cơ sở thực tiễn.",
      "CNDV biện chứng thừa nhận nhận thức là quá trình phản ánh sáng tạo hiện thực khách quan vào trong đầu óc con người dựa trên cơ sở thực tiễn.",
      "CNDV thừa nhận nhận thức là sự phản ánh hiện thực khách quan vào đầu óc con người.",
      "CNDV biện chứng thừa nhận nhận thức là quá trình biện chứng xuất phát từ thực tiễn và quay về phục vụ thực tiễn."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 373,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Muốn hoạt động thực tiễn có hiệu quả, chúng ta cần phải làm:",
    "options": [
      "Chỉ giữ lại những yếu tố nào của sự vật cũ nếu nó phù hợp với lợi ích của mình.",
      "Biết kế thừa những nhân tố tích cực tồn tại trong cái cũ.",
      "Biết kế thừa các nhân tố có lợi cho sự vật cũ.",
      "Phải kiên quyết xoá bỏ tất cả những cái cũ."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 374,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO3",
    "question": "Câu nói “Người vô lo, vô nghĩ trẻ lâu” thể hiện:",
    "options": [
      "Ý thức tác động tới vật chất",
      "Vật chất có trước và quyết định ý thức",
      "Vật chất quyết định ý thức",
      "Cả vật chất và ý thức đều không có tác động."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 375,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Tính chất của sự phát triển gồm:",
    "options": [
      "Tính khách quan, tính phổ biến và tính đa dạng, phong phú.",
      "Tính khách quan, tính tuyệt đối và tính cụ thể.",
      "Tính tương đối và tính tuyệt đối.",
      "Tính lịch sử cụ thể và tính vĩnh cửu."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 376,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Giới hạn từ 0 độ C đến 100 độ C được gọi là gì trong quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại là:",
    "options": [
      "Độ.",
      "Chất.",
      "Lượng.",
      "Bước nhảy."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 377,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO1",
    "question": "Ai là người khẳng đinh: “Các hình thức và các dạng khác nhau của vật chất chỉ có thể nhận thức được thông qua vận động; thuộc tính của vật thể chỉ bộc lộ ra qua vận động…”?",
    "options": [
      "Mác",
      "Hêghen",
      "V.I.Lênin",
      "Ph.Ăngghen"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 378,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO1",
    "question": "Theo quan điểm triết học mácxít, luận điểm nào sau đây sai:",
    "options": [
      "Lượng là tính quy định vốn của sự vật.",
      "Lượng tồn tại khách quan gắn liền với sự vật.",
      "Lượng nói lên quy mô, trình độ phát triển của sự vật.",
      "Lượng phụ thuộc vào ý chí của con người."
    ],
    "answer": 1,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 379,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Phát triển trong phép biện chứng duy vật là chỉ:",
    "options": [
      "Sự thay đổi về mặt số lượng hay khối lượng của sự vật, hiện tượng tạo nên sự vận động, lớn dần lên của nó.",
      "Sự thay đổi vị trí của sự vật, hiện tượng trong không gian tạo nên sự biểu hiện phong phú, đa dạng của chúng.",
      "Quá trình vận động của sự vật theo khuynh hướng đi lên: từ trình độ thấp đến trình độ cao, từ kém hoàn thiện đến hoàn thiện hơn, là sự biến đổi về chất của sự vật.",
      "Quá trình vận động mang tính lịch sử của thế giới vật chất theo khuynh hướng đi lên gắn vơi hoàn cảnh cụ thể."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 380,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO2",
    "question": "Chất có quan hệ với kết cấu của sự vật:",
    "options": [
      "Chất bị quy định bởi kết cấu của sự vật",
      "Chất hoàn toàn độc lập với kết cấu của sự vật",
      "Tùy từng trường hợp thì chất có mối quan hệ với kết cấu của sự vật",
      "Chất hoàn toàn độc lập với kết cấu của sự vật"
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  },
  {
    "id": 381,
    "chapter": "Đề kiểm tra giữa kỳ",
    "tag": "CLO1",
    "question": "Phủ định biện chứng do cái gì gây ra:",
    "options": [
      "Giải quyết mâu thuẫn bên trong sự vật.",
      "Việc thực hiện bước nhảy vể chất.",
      "Sự xung đột giữa cái mới với cái cũ.",
      "Giải quyết mâu thuẫn bên ngoài sự vật."
    ],
    "answer": 0,
    "explanation": "Kiến thức trọng tâm theo giáo trình Triết học Mác - Lênin."
  }
];

const CHAPTERS_LIST = [
  {
    "name": "Bài 1: Triết học & Triết học Mác - Lênin",
    "count": 59
  },
  {
    "name": "Bài 2: Chủ nghĩa duy vật biện chứng",
    "count": 132
  },
  {
    "name": "Bài 3: Chủ nghĩa duy vật lịch sử",
    "count": 120
  },
  {
    "name": "Đề kiểm tra số 1",
    "count": 20
  },
  {
    "name": "Đề kiểm tra số 2",
    "count": 20
  },
  {
    "name": "Đề kiểm tra giữa kỳ",
    "count": 30
  }
];
