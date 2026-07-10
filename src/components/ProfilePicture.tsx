import profilePicture from "@assets/images/profile-picture.webp";

export function ProfilePicture({ alt }: { alt: string }) {
  return (
    <img
      src={profilePicture.src}
      alt={alt}
      className="w-24 h-24 rounded-2xl hover:w-52 hover:h-52 transition-all duration-400 grayscale hover:grayscale-0"
    />
  );
}
