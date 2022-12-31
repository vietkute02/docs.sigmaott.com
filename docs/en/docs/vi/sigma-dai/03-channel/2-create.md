---
title: Create a new channel
order: 2
---

# Create a new channel
This function allows CMS to create new channels to run and contain advertising

 **Step 1**: At the main screen interface List of channels, users click on button **Creating**

Pop-up Display System Add new channel to the right interface ![](../image/pop-up-create-channel.png)

With key information:

* Mandatory settings:

| Tên                                            | Chức năng                                                |
| ---------------------------------------------- | -------------------------------------------------------- |
| **Tên**                                        | Tên kênh do nguời dùng tự cấu hình.                      |
| **Thẻ**                                        | Một thẻ giúp phân biệt và dễ dàng tìm kiếm kênh khi cần. |
| **Nguồn nội dung video(video content source)** | Link Origin gốc.                                         |
| **Máy chủ quảng cáo(AdDecisionServer)**        | là 1 link vastID do bên quảng cáo cung cấp.              |


* Cài đặt nâng cao( không bắt buộc): với người xem, không thể yêu cầu thẳng tới origin, **để xem được quảng cáo cần có thêm link CDN**( có thể xem CDN là bên thứ 3), sử dụng CDN để gửi yêu cầu phát lại tới SSAI, tại đây CDN sẽ chuyển đổi link để có thể gọi Origin tới người dùng.

*2 link CDN này có sự khác nhau giữa các segment → Phần đuôi gán vào link để xem quảng cáo do người dùng tự config.*

 | Tên                                                    | Chức năng                        |
 | ------------------------------------------------------ | -------------------------------- |
 | **Phân đoạn nội dung CDN(CDN content segment prefix)** | Link gốc đã được chuyển đổi.     |
 | **Phân đoạn quảng cáo CDN( CDN ad segment prefix)**    | Link gốc đã được chuyển đổi      |
 | **Giữ lại đánh dấu quảng cáo(Ad martket passthrough)** | Không cho phép/ Cho phép         |
 | **Bumpers chèn trước quảng cáo**                       | Bumpers chèn vào trước quảng cáo |
 | **Bumpers chèn sau quảng cáo**                         | Bumpers chèn vào sau quảng cáo   |


* **"Huxu"**: No new implementation, returning to the main screen interface.
* **Nút "Lưu"**: Lưu thông tin tạo mới, trở về giao diện màn hình chính.


**Step 2**: User input.

**Step 3**: Click button **Save** at the end of Pop-up

Hệ thống thực hiện tạo mới kênh với lưu các thông tin vừa được nhập, hiển thị Pop-up thông báo **Tạo kênh thành công** tại góc phải màn hình.

![](../image/notice-create-success.png)
## Thông tin về Bumpers ad
Bumpers là **video ngắn, không thể bỏ qua** video được chèn vào đầu hoặc cuối trước khi kết thúc điểm quảng cáo nếu đủ thời gian.

Để sử dụng Bumpers, người dùng chọn asset được cấu hình sẵn từ server ThudoJSC hoặc người dùng upload file video trực tiếp lên hệ thống Sigma.

### Điều kiện

Các điều kiện sau áp dụng để chèn bumpers:
* Loại Video
* Giới hạn thời lượng bumpers ad là **10 giây hoặc ít hơn.**
* Bumpers có thể được chèn vào **điểm đầu hoặc kết thúc** của quảng cáo( ad break) hoặc **cả hai**.
* Bumpers **được chuyển mã** để phù hợp với nội dung nguồn.