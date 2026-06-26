export const templates = {
  announcement: `*IMPORTANT ANNOUNCEMENT*\n\n_Please read this carefully._\n\nWe have some exciting news to share with everyone. Stay tuned for more details!\n\n~Old information no longer applies.~\n\n*Thank you for your attention!*`,
  bold_message: `*This entire message is bold.*\n\nUse bold for *important words* or to *highlight key information* in your message.`,
  meeting_invite: `*Meeting Tomorrow*\n\n_Time:_ *3:00 PM - 4:00 PM*\n_Location:_ Google Meet\n_Agenda:_ Q3 Review\n\nPlease confirm your attendance. ~Last week's meeting notes attached.~`,
  promotion: `*FLASH SALE - Today Only!*\n\nGet *50% OFF* on all products\n\n~Regular price: $1,000~\n*Sale price: $500 only!*\n\n_Offer ends at midnight. Don't miss it!_`,
  code_share: `Here's the fix:\n\n\`\`\`\nconst result = array.filter((x) => x > 0);\nconsole.log(result);\n\`\`\`\n\n_Run this in your terminal and let me know if it works._`,
  reminder: `*Quick Reminder*\n\n_Don't forget:_ *Project deadline is today at 5 PM*\n\nPlease submit your work before the cutoff. ~Extensions are not available this time.~\n\n*Good luck everyone!*`,
};

export type TemplateKey = keyof typeof templates;

export const templateCards: Array<{
  key: TemplateKey;
  name: string;
  example: string;
  platform: 'WhatsApp' | 'Telegram' | 'Both';
}> = [
  {
    key: 'announcement',
    name: 'Announcement',
    example: '*IMPORTANT* _Please read_',
    platform: 'Both',
  },
  {
    key: 'bold_message',
    name: 'Bold Message',
    example: '*This is fully bold*',
    platform: 'WhatsApp',
  },
  {
    key: 'meeting_invite',
    name: 'Meeting Invite',
    example: '*Meeting Tomorrow* at _3 PM_',
    platform: 'Both',
  },
  {
    key: 'promotion',
    name: 'Promo Message',
    example: '*50% OFF* ~$500~ $250 only',
    platform: 'WhatsApp',
  },
  {
    key: 'code_share',
    name: 'Code Share',
    example: "```console.log('hello')```",
    platform: 'Telegram',
  },
  {
    key: 'reminder',
    name: 'Reminder',
    example: "_Don't forget:_ *5 PM today*",
    platform: 'Both',
  },
];
