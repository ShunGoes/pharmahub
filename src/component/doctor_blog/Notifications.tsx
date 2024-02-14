import user_img from "../../assets/images/user.png";

const Notifications = () => {
  return (
    <div className="mt-8 px-8">
          <p className="text-[#6D7A7F] text-sm font-semibold pt-6">
            JANUARY 2023
          </p>
          <div>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="border-b border-[#E5E5E5] flex items-center gap-4"
              >
                <img src={user_img} alt="" className="w-10 h-10 rounded-full" />
                <div className="py-4">
                  <p className="text-[#0C2129] font-medium font-mont">
                    Untitled liked your post{" "}
                    <a href="#" className="underline text-[#0C2129]">
                      “How to stay healthy during harmattan”
                    </a>
                  </p>
                  <p className="text-[#6D7A7F] font-medium text-sm">
                    2 days ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Notifications