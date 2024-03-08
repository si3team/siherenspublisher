import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import FileUpload from "../FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { handleWebsiteData } from "../../reducers/contentReducer";

function NavbarFields({ toggleDrawer }) {
  const { websiteData } = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const handleDeleteImage = () => {
    const updatedNavbarData = { ...websiteData.navbar };
    updatedNavbarData.logo = null;
    dispatch(handleWebsiteData({ ...websiteData, navbar: updatedNavbarData }));
  };
  const handleAddImage = (e) => {
    if (e.target.files.length > 0) {
      const updatedNavbarData = { ...websiteData.navbar };
      updatedNavbarData.logo = e.target.files[0];
      dispatch(
        handleWebsiteData({ ...websiteData, navbar: updatedNavbarData })
      );
    }
  };
  const handleInputChange = (fieldName, value) => {
    const updatedNavbarData = { ...websiteData.navbar };
    updatedNavbarData[fieldName] = value;
    dispatch(handleWebsiteData({ ...websiteData, navbar: updatedNavbarData }));
  };
  return (
    <div className="w-full bg-white">
      <div className=" border border-b-gray-200 z-10 bg-gray-100  flex items-center justify-between  w-full p-4">
        <p className="text-lg font-semibold">Navbar</p>
        <button onClick={toggleDrawer}>
          <RxCrossCircled className="text-gray-600 text-2xl" onC />
        </button>
      </div>
      <div className=" overflow-y-auto max-h-screen">
        <form className="mb-10">
          <div className="flex flex-col items-start p-4 mt-16">
            <p className="text-sm font-semibold">LOGO</p>
            {websiteData?.navbar?.logo ? (
              <FileUpload
                image={websiteData?.navbar?.logo}
                handleDeleteImage={handleDeleteImage}
                handleAddImage={handleAddImage}
              />
            ) : (
              <div className="flex items-center justify-center w-full mt-4">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-24 border border-[#E5E5EA] border-dashed rounded-lg cursor-pointer  hover:bg-[#fceed966] hover:border-[#F6D4A0] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex items-center justify-center pt-5 pb-6">
                    <IoIosAddCircle className="text-gray-500" />
                    <p className="ms-1 text-xs text-gray-500 dark:text-gray-400">
                      ADD AN IMAGE
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleAddImage}
                  />
                </label>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start p-4 mt-4">
            <p className="text-xs font-semibold text-gray-600">
              Image alt text
            </p>
            <div className="w-full">
              <input
                value={websiteData?.navbar?.imageAltText}
                type="text"
                id="image_alt_text"
                class="mt-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-gray-300 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-400 block w-full p-2.5  "
                placeholder="Image alt text"
                required
                onChange={(e) =>
                  handleInputChange("imageAltText", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-start p-4 mt-4">
            <p className="text-xs font-semibold text-gray-600">Website Name</p>
            <div className="w-full">
              <input
                value={websiteData?.navbar?.websiteName}
                type="text"
                id="websiteName"
                class="mt-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-gray-300 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-400 block w-full p-2.5  "
                placeholder="SI HER"
                required
                onChange={(e) =>
                  handleInputChange("websiteName", e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex flex-col items-start p-4 mt-4">
            <p className="text-xs font-semibold text-gray-600">LINKS</p>
            <div className="w-full">
              <p className="text-xs text-start mt-6 font-semibold text-gray-600">
                Link Text
              </p>
              <input
                value={websiteData?.navbar?.linkText1}
                type="text"
                id="linkText1"
                class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-gray-300 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-400 block w-full p-2.5  "
                placeholder="Value"
                required
                onChange={(e) => handleInputChange("linkText1", e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="text-xs text-start mt-6 font-semibold text-gray-600">
                Link Text
              </p>
              <input
                value={websiteData?.navbar?.linkText2}
                type="text"
                id="linkText2"
                class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-gray-300 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-400 block w-full p-2.5  "
                placeholder="My Media"
                required
                onChange={(e) => handleInputChange("linkText2", e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="text-xs text-start mt-6 font-semibold text-gray-600">
                Link Text
              </p>
              <input
                value={websiteData?.navbar?.linkText3}
                type="text"
                id="linkText3"
                class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-gray-300 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-400 block w-full p-2.5  "
                placeholder="Vison"
                required
                onChange={(e) => handleInputChange("linkText3", e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="text-xs text-start mt-6 font-semibold text-gray-600">
                Link Text
              </p>
              <input
                value={websiteData?.navbar?.linkText4}
                type="text"
                id="linkText4"
                class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-gray-300 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-400 block w-full p-2.5  "
                placeholder="CV"
                required
                onChange={(e) => handleInputChange("linkText4", e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="text-xs text-start mt-6 font-semibold text-gray-600">
                Link Text
              </p>
              <input
                value={websiteData?.navbar?.linkText5}
                type="text"
                id="linkText5"
                class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-gray-300 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-400 block w-full p-2.5  "
                placeholder="Connect"
                required
                onChange={(e) => handleInputChange("linkText5", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start p-4 mt-4">
            <p className="text-xs font-semibold text-gray-600">Button Text</p>
            <div className="w-full">
              <input
                value={websiteData?.navbar?.buttonText}
                type="text"
                id="buttonText"
                class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-gray-300 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-400 block w-full p-2.5  "
                placeholder="Login"
                required
                onChange={(e) =>
                  handleInputChange("buttonText", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-start p-4 mt-4 mb-20">
            <p className="text-xs font-semibold text-gray-600">FIXED HEADER</p>
            <div className="flex items-center gap-5">
              <span class="text-xs font-normal text-gray-900 dark:text-gray-300">
                Always show the header on top of the screen
              </span>
              <label className="inline-flex items-center justify-between cursor-pointer">
                <input
                  type="checkbox"
                  checked={websiteData?.navbar?.fixedHeader}
                  className="sr-only peer"
                  onChange={(e) =>
                    handleInputChange(
                      "fixedHeader",
                      !websiteData?.navbar?.fixedHeader
                    )
                  }
                />
                <div className="relative w-9 h-5 bg-gray-200 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NavbarFields;
