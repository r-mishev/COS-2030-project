import { PrettyChatWindow } from "react-chat-engine-pretty";

export type UserProps = {
  username: string;
  secret: string;
};

type ChatsPageProps = {
  user: UserProps;
};

export const ChatsPage = (props: ChatsPageProps) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={import.meta.env.VITE_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
