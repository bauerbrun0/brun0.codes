import profilePicture from "@assets/images/profile-picture.png";

export function ProfilePicture({ alt }: { alt: string }) {
  return (
    <img
      src={profilePicture.src}
      alt={alt}
      className="w-24 h-24 rounded-2xl hover:w-52 hover:h-52 transition-all duration-400"
    />
  );
}
