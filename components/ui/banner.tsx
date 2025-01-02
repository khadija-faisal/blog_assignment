
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="bg-[url('/images/contactbackground.svg')] flex justify-center items-center  w-screen h-[534px] bg-center bg-cover bg-no-repeat   ">
      <div className=" w-[90%]  md:w-[60%] flex justify-center items-center flex-col gap-10">
        <h3 className=" font-raleway text-text text-3xl sm:text-4xl md:text-6xl font-bold text-center">
          Get our stories delivered From us to your inbox weekly.
        </h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            className="bg-text py-6 text-text2"
            type="email"
            placeholder="enter your Email"
          />
          <Button
            className="bg-primary2 text-base font-bold border py-6 hover:bg-text hover:text-primary2  "
            type="submit"
          >
            Subscribe
          </Button>
        </div>
        <p className="text-slate-300 sm:text-xl text-center">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </div>
    </div>
  );
};

export default Banner;
