import { NextPage } from 'next';
import { ContainerTypes } from './CommandContainer';

type SideBarParams = {
  containerVisible: ContainerTypes;
};

const SideBar: NextPage<SideBarParams> = ({ containerVisible }) => {
  return (
    <div className="sticky top-5 mt-8 h-full items-start self-start">
      <div
        className="
            my-4 mx-2 h-screen w-64 
            rounded-2xl bg-[#141414]">
        <ul className="mt-16 flex w-full flex-col pt-8">
          <li>
            <a
              href="#home"
              className="flex flex-col items-center px-10 py-4 text-3xl font-bold">
              UwU
            </a>
          </li>
          {containerVisible === 'text' ? (
            <li className="clip my-2 -mx-4 mt-24 flex items-center rounded-3xl bg-primary px-10 transition hover:bg-[#ff28a0]">
              <a
                href="#nonTextCommandContainer"
                className="flex items-center">
                <img className="scale-[0.50]" src="/text_icon_dark.png" />
                <div className=" text-3xl font-semibold text-black">
                  Text
                </div>
              </a>
            </li>
          ) : (
            <li className="my-2 -mx-4 mt-24 flex w-full items-center rounded-2xl px-10 transition">
              <a
                href="#textCommandContainer"
                className="flex w-full items-center ">
                <img className="scale-[0.40]" src="/text_icon_light.png" />
                <div className="text-2xl font-semibold">Text</div>
              </a>
            </li>
          )}
          {containerVisible === 'nonText' ? (
            <li className="clip my-2 -mx-4 flex items-center rounded-3xl bg-primary px-10 transition hover:bg-[#ff28a0]">
              <a
                href="#nonTextCommandContainer"
                className="flex items-center">
                <img className="scale-[0.50]" src="/image_icon_dark.png" />
                <div className=" text-3xl font-semibold text-black">
                  Image
                </div>
              </a>
            </li>
          ) : (
            <li className="my-2 -mx-4 mt-4 flex w-full -translate-x-4 items-center rounded-md px-10">
              <a
                href="#nonTextCommandContainer"
                className="flex items-center">
                <img
                  className="scale-[0.40]"
                  src="/image_icon_light.png"
                />
                <div className=" text-2xl font-semibold">Image</div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
