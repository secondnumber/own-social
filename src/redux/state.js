import SmallProfileIcon from '../components/ProfilePage/LeftMenu/icons/SmallProfileInfo.png';
import BagesIcon from '../components/ProfilePage/LeftMenu/icons/BadgesIcon.png';
import EventsIcon from '../components/ProfilePage/LeftMenu/icons/EventsIcon.png';
import ForumsIcon from '../components/ProfilePage/LeftMenu/icons/ForumsIcon.png';
import GroupsIcon from '../components/ProfilePage/LeftMenu/icons/GroupsIcon.png';
import MarketplaceIcon from '../components/ProfilePage/LeftMenu/icons/MarketplaceIcon.png';
import MembersIcon from '../components/ProfilePage/LeftMenu/icons/MembersIcon.png';
import NewsfeedIcon from '../components/ProfilePage/LeftMenu/icons/NewsfeedIcon.png';
import OverviewIcon from '../components/ProfilePage/LeftMenu/icons/OverviewIcon.png';
import QuestsIcon from '../components/ProfilePage/LeftMenu/icons/QuestsIcon.png';
import StreamsIcon from '../components/ProfilePage/LeftMenu/icons/StreamsIcon.png';
import { rerenderEntireTree } from '../render';

let state = {
  headerData: {
    navMenuList: [
      { id: 1, name: 'Home' },
      { id: 2, name: 'Careers' },
      { id: 3, name: 'Faqs' },
      { id: 4, name: '...' },
    ],
    progressCount: [{ id: 1, experience: 38 }],
  },
  leftMenuData: {
    iconsList: [
      { id: 1, icon: SmallProfileIcon },
      { id: 2, icon: BagesIcon },
      { id: 3, icon: EventsIcon },
      { id: 4, icon: ForumsIcon },
      { id: 5, icon: GroupsIcon },
      { id: 6, icon: MarketplaceIcon },
      { id: 7, icon: MembersIcon },
      { id: 8, icon: NewsfeedIcon },
      { id: 9, icon: OverviewIcon },
      { id: 10, icon: QuestsIcon },
      { id: 11, icon: StreamsIcon },
    ],
  },
  rightMenuData: {
    iconsList: [
      { id: 1, icon: SmallProfileIcon },
      { id: 2, icon: SmallProfileIcon },
      { id: 3, icon: SmallProfileIcon },
      { id: 4, icon: SmallProfileIcon },
      { id: 5, icon: SmallProfileIcon },
      { id: 6, icon: SmallProfileIcon },
      { id: 7, icon: SmallProfileIcon },
    ],
  },
  accountInfoData: {
    accountInfoList: [
      {
        id: 1,
        name: 'My Profile',
        description:
          'Change your avatar and cover, accept friends, read messages and more!',
        profileMenuList: [
          { id: 1, name: 'Timeline', link: '/timeline' },
          { id: 2, name: 'Profile Info', link: '/profile_info' },
          { id: 3, name: 'Social and Stream', link: '/social_and_stream' },
          { id: 4, name: 'Notifications', link: '/notifications' },
          { id: 5, name: 'Messages', link: '/dialogs' },
          { id: 6, name: 'Friend Requests', link: '/friend_requests' },
        ],
      },
      {
        id: 2,
        name: 'Account',
        description:
          'Change settings, configure notifications, and review your privacy',
      },
      {
        id: 3,
        name: 'Groups',
        description:
          'Create new groups, manage the ones you created or accept invites!',
      },
      {
        id: 4,
        name: 'My Store',
        description:
          'Review your account, manage products check stats and much more!',
      },
    ],
  },
  timeline: {
    postsData: [
      {
        id: 1,
        author: 'Marina Valentine',
        time: '29 minutes ago',
        message:
          'Hi to all! Remembercomments that today I\'ll be livestreaming along with @NekoBebop the new character of the brand new Xenowatch patch "Anya Darkness". See you there!',
        reactions: 15,
        comments: 1,
        shares: 1,
      },
      {
        id: 2,
        author: 'Marina Valentine',
        time: '17 hours ago',
        message: 'This is a dream come true, thanks to all for the support!!!',
        reactions: 21,
        comments: 4,
        shares: 3,
      },
      {
        id: 3,
        author: 'Marina Valentine',
        time: '2 days ago',
        message:
          "Here's a sneak peek of the official box cover art for Machine Wasteland II! Remember that I'll be having a stream showing a preview tommorrow at 9PM PCT!",
        reactions: 9,
        comments: 0,
        shares: 0,
      },
    ],
    newPostText: 'new',
  },

  messages: {
    friendsData: [
      { id: 1, name: 'Bearded Wonder' },
      { id: 2, name: 'Neko Bebop' },
      { id: 3, name: 'Nick Grissom' },
      { id: 4, name: 'Sarah Diamond' },
      { id: 5, name: 'Matt Parker' },
    ],

    messagesData: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Hello' },
      { id: 3, message: 'How are you?' },
    ],
  },
};

window.state = state;

export let addPost = () => {
  let date = new Date();
  let dateString = date.toLocaleDateString();
  let newPost = {
    id: 5,
    author: 'Marina Valentine',
    time: dateString,
    message: state.timeline.newPostText,
    reactions: 0,
    comments: 0,
    shares: 0,
  };
  state.timeline.postsData.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.timeline.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
