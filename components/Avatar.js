import Image from "next/image";
import PropTypes from "prop-types";

const Avatar = ({ image = "", alt = "" }) => {
  return (
    <div className="rounded-full w-[65px] h-[65px] relative">
      <Image
        src={image ?? ""}
        alt="temperature-icon"
        layout="fill"
        objectFit="cover"
        title={alt ?? ""}
        width={65}
        height={65}
      />
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Avatar;
