import { useRef, useState } from "react";
import PictureIcon from "../../../assets/picture";
import "./avatarUpload.scss";

export default function AvatarUpload(): JSX.Element {
  const UUID = crypto.randomUUID();

  const [image, setImage] = useState("");

  const [imgWidth, setImgWidth] = useState(0);

  const avatarUploadWrapperRef = useRef<HTMLDivElement>(null);

  const onDragEnter = () =>
    !image &&
    avatarUploadWrapperRef.current?.classList.add("avatar-upload--dragging");
  const onDragLeave = () =>
    !image &&
    avatarUploadWrapperRef.current?.classList.remove("avatar-upload--dragging");

  return (
    <div
      ref={avatarUploadWrapperRef}
      className={`avatar-upload__wrapper ${image && "avatar-upload--uploaded"}`}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDragLeave}
    >
      {!image ? (
        <>
          <label className="avatar-upload__label" htmlFor={UUID}>
            <div className="avatar-upload__label__content">
              <div className="avatar-upload__label__content-title-row">
                <PictureIcon />
                <h1 className="avatar-upload__label__cta">Organization Logo</h1>
              </div>
              <p className="avatar-upload__label__content-description">
                Drop the image here or click to browse.
              </p>
            </div>
          </label>
          <input
            id={UUID}
            type="file"
            accept="image/*"
            className="upload-input"
            onChange={(event) =>
              setImage(URL.createObjectURL((event.target.files?.[0] as Blob) ?? ""))
            }
          />
        </>
      ) : (
        <div className="avatar-crop-container">
          <div className="avatar-box" >
            <img className="avatar__img" src={image} alt="avatar-image" style={{width:`${100 + imgWidth}%`}} />
          </div>
          <input type="range" value={imgWidth ?? 0} onChange={(e) => setImgWidth(Number(e.target.value))} />
        </div>
      )}
    </div>
  );
}
