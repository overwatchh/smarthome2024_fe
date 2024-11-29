import logoImg from "./images/logo.png";
import heroImg from "./images/bg_hero.jpg";
import accelerateImg from "./images/accelerate.png";
import engageImg from "./images/engage.png";
import partnerImg from "./images/partner.png";
function App() {
  return (
    <div>
      {/* header section */}
      <div className="flex flex-row bg-circuit-board-yellow bg-cover justify-center py-2 lg:py-3">
        <img
          src={logoImg}
          className="w-40 h-11 lg:w-80 lg:h-20"
          alt="logo image"
        />
      </div>
      {/* introduction section */}
      <div className="mt-12 lg:flex lg:gap-4 lg:max-w-screen-xl lg:mx-auto">
        <div className="text-center lg:text-start lg:flex-[1] lg:pl-3">
          <div className="font-bold text-4xl mb-3 lg:text-6xl">
            <p className="text-primary">Mở cửa nhà </p>
            <p className="text-secondary mt-2">bằng điện thoại</p>
          </div>
          <p className="mb-4 mt-4 px-14 font-light text-primary leading-6 lg:text-2xl lg:px-0 lg:mt-6">
            Quên chìa khóa? Không còn là vấn đề! Bạn có thể mở cửa chỉ bằng một
            cú chạm trên điện thoại của mình.
          </p>
        </div>
        <div className="lg:flex-[1]">
          <img src={heroImg} alt="img" />
        </div>
      </div>
      {/* advantage section */}
      <div className="mt-16 px-2 text-center lg:mt-40">
        <div className="text-center">
          <p className="text-primary leading-6 font-light text-lg lg:text-5xl">
            Lợi ích của mở cửa nhà bằng điện thoại
          </p>
          <p className="mt-3 text-gray-500 leading-6 font-light text-sm lg:text-xl lg:mt-10">
            Không cần phải lục lọi trong túi xách hay chiếc ví nữa, chỉ cần vài
            thao tác đơn giản, bạn có thể mở cửa nhà.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-14 lg:mt-24 lg:flex-row lg:max-w-screen-xl lg:mx-auto lg:gap-10 lg:px-4">
          <div className="flex flex-col items-center">
            <div className="max-w-48 text-center">
              <div className="lg:h-36">
                <img
                  className="block mx-auto"
                  src={accelerateImg}
                  alt="accelerate image"
                />
              </div>
              <p className="mt-4 leading-5 font-bold text-base lg:text-2xl">
                Mở cửa nhanh, mọi lúc mọi nơi
              </p>
            </div>
            <p className="mt-5 text-gray-500 leading-6 font-light text-sm lg:text-xl lg:text-start">
              Chỉ với một nút chạm trên điện thoại, bạn có thể mở cửa cuốn từ
              bất kỳ đâu, miễn là có kết nối mạng. Không còn phải lo lắng về
              việc quên chìa khóa hay chờ đợi.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="max-w-48 text-center">
              <div className="lg:h-36">
                <img
                  className="block mx-auto"
                  src={engageImg}
                  alt="accelerate image"
                />
              </div>
              <p className="mt-4 leading-5 font-bold text-base lg:text-2xl">
                Chia sẻ tiện lợi, gia đình an tâm
              </p>
            </div>
            <p className="mt-5 text-gray-500 leading-6 font-light text-sm lg:text-xl lg:text-start">
              Dễ dàng cấp quyền mở cửa cho người thân lên tới 50 thành viên. Ai
              cũng có thể tự mở cửa mà không cần thêm chìa khóa phiền phức.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="max-w-48 text-center">
              <div className="lg:h-36">
                <img
                  className="block mx-auto"
                  src={partnerImg}
                  alt="accelerate image"
                />
              </div>
              <p className="mt-4 leading-5 font-bold text-base lg:text-2xl">
                Tiết kiệm và hiệu quả
              </p>
            </div>
            <p className="mt-5 text-gray-500 leading-6 font-light text-sm lg:text-xl lg:text-start">
              Bỏ qua chi phí làm nhiều chìa khóa – chỉ cần một chiếc điện thoại,
              cả nhà đều sử dụng được. Giải pháp hiện đại, tiết kiệm chi phí,
              phù hợp với mọi gia đình.
            </p>
          </div>
        </div>
      </div>
      {/* approach section */}
      <div className="mt-12 px-2 text-center lg:mt-40">
        <div className="text-center">
          <p className="text-primary leading-6 font-light text-lg lg:text-5xl">
            Đặt Hàng Nhanh Chóng, Đơn Giản
          </p>
          <p className="mt-3 text-gray-500 leading-6 font-light text-sm lg:text-xl">
            Liên hệ ngay hôm nay để biến căn nhà của bạn trở nên thông minh và
            tiện nghi hơn!
          </p>
        </div>
        <div className="mt-8 lg:mt-24">
          <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-10 lg:justify-center">
            <div className="relative p-6 w-72 rounded-md shadow-secondary text-center">
              <div className="absolute top-0 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-3xl shadow-primary bg-white">
                <span className="text-sm font-bold text-primary lg:text-2xl">
                  1
                </span>
              </div>
              <p className="mt-2 text-secondary leading-6 font-bold text-sm lg:text-2xl">
                Đặt lịch hẹn
              </p>
              <p className="mt-3 text-sm font-normal text-primary lg:text-xl lg:text-justify">
                Hãy để lại lịch hẹn khi bạn có thể ở nhà. Đội ngũ kỹ thuật viên
                chuyên nghiệp sẽ đến đúng giờ để lắp đặt thiết bị.
              </p>
            </div>

            <div className="relative p-6 w-72 rounded-md shadow-secondary text-center">
              <div className="absolute top-0 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-3xl shadow-primary bg-white">
                <span className="text-sm font-bold text-primary lg:text-2xl">
                  2
                </span>
              </div>
              <p className="mt-2 text-secondary leading-6 font-bold text-sm lg:text-2xl">
                Xác nhận thông tin
              </p>
              <p className="mt-3 text-sm font-normal text-primary lg:text-xl lg:text-justify">
                Nhân viên kỹ thuật sẽ liên hệ trực tiếp với bạn để xác nhận lịch
                hẹn và giải đáp mọi thắc mắc, đảm bảo bạn hoàn toàn yên tâm
                trước khi lắp đặt.
              </p>
            </div>

            <div className="relative p-6 w-72 rounded-md shadow-secondary text-center">
              <div className="absolute top-0 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-3xl shadow-primary bg-white">
                <span className="text-sm font-bold text-primary lg:text-2xl">
                  3
                </span>
              </div>
              <p className="mt-2 text-secondary leading-6 font-bold text-sm lg:text-2xl">
                Lắp đặt, hướng dẫn
              </p>
              <p className="mt-3 text-sm font-normal text-primary lg:text-xl lg:text-justify">
                Kỹ thuật viên đến tận nơi để lắp đặt thiết bị và hướng dẫn chi
                tiết cách sử dụng ứng dụng trên điện thoại, giúp bạn sẵn sàng
                trải nghiệm công nghệ hiện đại một cách dễ dàng nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="mt-14 lg:mt-40">
        <div className="text-center">
          <p className="text-primary leading-6 font-light text-lg lg:text-5xl">
            Đăng ký lắp đặt
          </p>
          <p className="mt-3 text-gray-500 leading-6 font-light text-sm lg:text-xl lg:mt-10 lg:text-primary">
            Điền thông tin của bạn và chúng tôi sẽ liên lạc và cử nhân viên kỹ
            thuật đến lắp đặt thiết bị trong ngày
          </p>
        </div>
        <div className="flex justify-center mt-4 lg:mt-12">
          <div className="shadow-form w-4/6 border-indigo-200 rounded-xl px-6 py-12">
            <div>
              <div>
                <label
                  id="name"
                  className="block text-gray-500 text-sm lg:text-2xl"
                  htmlFor="name"
                >
                  Tên*
                </label>
                <input
                  className="focus:outline-none bg-gray-200 w-full mt-2 px-2 text-primary text-sm lg:text-2xl"
                  name="name"
                  type="text"
                />
              </div>

              <div className="mt-5 lg:mt-8">
                <label
                  id="phone"
                  className="block text-gray-500 text-sm lg:text-2xl"
                  htmlFor="phone"
                >
                  Điện thoại*
                </label>
                <input
                  className="focus:outline-none border-y border-x border-rose-600 bg-gray-200 w-full mt-2 px-2 text-primary text-sm lg:text-2xl"
                  name="phone"
                  type="text"
                />

                <span className="block text-sm text-red-600 mt-1 lg:mt-2 lg:text-xl">
                  Vui lòng nhập số điện thoại
                </span>
              </div>
            </div>

            <div className="text-center mt-10">
              <button className="w-full h-8 px-14 py-2 bg-primary text-white leading-4 font-bold text-sm rounded-md lg:text-xl lg:h-12">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="mt-14 text-center bg-cover bg-circuit-board-gray py-12">
        <div className="w-72 mx-auto lg:w-1/3">
          <p className="text-lg font-light text-primary lg:text-5xl">
            An Toàn Tuyệt Đối Với Công Nghệ Hàng Đầu
          </p>
          <p className="mt-3 text-sm font-light text-gray-500 lg:text-xl lg:text-start lg:mt-10">
            Sản phẩm được phát triển bởi các công ty công nghệ uy tín hàng đầu,
            tích hợp công nghệ mã OTP – mã xác nhận chỉ dùng một lần, đảm bảo
            tính bảo mật cao nhất. Với giải pháp này, ngôi nhà của bạn luôn được
            bảo vệ an toàn trước mọi nguy cơ xâm nhập trái phép. Tin tưởng vào
            công nghệ, an tâm tận hưởng cuộc sống!
          </p>
        </div>
      </div>
      {/* section */}
      <div className="text-center bg-secondary bg-circuit-board-yellow bg-contain py-12">
        <div className="w-96 mx-auto text-3xl leading-10 font-light text-primary px-2 lg:w-1/3 lg:text-4xl">
          <p>
            <span className="text-white">Thời đại số, bảo vệ tổ ấm </span>
          </p>
          <p>chỉ với một chạm!</p>
        </div>
      </div>
      {/* Footer */}
      <div className="py-3">
        <p className="text-center text-base font-normal text-gray-500">
          101Digital &copy; 2024{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
