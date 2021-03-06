import MockAdapter from 'axios-mock-adapter';

import TelegramClient from '../TelegramClient';

const ACCESS_TOKEN = '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';

const createMock = () => {
  const client = new TelegramClient(ACCESS_TOKEN);
  const mock = new MockAdapter(client.axios);
  return { client, mock };
};

describe('group api', () => {
  describe('#kickChatMember', () => {
    it('should kick chat member', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/kickChatMember', {
          chat_id: 427770117,
          user_id: 313534466,
          until_date: 1502855973,
        })
        .reply(200, reply);

      const res = await client.kickChatMember(427770117, 313534466, {
        until_date: 1502855973,
      });
      expect(res).toEqual(result);
    });
  });

  describe('#unbanChatMember', () => {
    it('should unban chat member', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/unbanChatMember', {
          chat_id: 427770117,
          user_id: 313534466,
        })
        .reply(200, reply);

      const res = await client.unbanChatMember(427770117, 313534466);
      expect(res).toEqual(result);
    });
  });

  describe('#restrictChatMember', () => {
    it('should restrict chat member', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/restrictChatMember', {
          chat_id: 427770117,
          user_id: 313534466,
          can_send_messages: true,
          can_add_web_page_previews: true,
        })
        .reply(200, reply);

      const res = await client.restrictChatMember(427770117, 313534466, {
        can_send_messages: true,
        can_add_web_page_previews: true,
      });
      expect(res).toEqual(result);
    });
  });

  describe('#promoteChatMember', () => {
    it('should pormote chat member', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/promoteChatMember', {
          chat_id: 427770117,
          user_id: 313534466,
          can_change_info: true,
          can_invite_users: true,
          can_delete_messages: true,
        })
        .reply(200, reply);

      const res = await client.promoteChatMember(427770117, 313534466, {
        can_change_info: true,
        can_invite_users: true,
        can_delete_messages: true,
      });
      expect(res).toEqual(result);
    });
  });

  describe('#exportChatInviteLink', () => {
    it('should export chat invite link', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/exportChatInviteLink', {
          chat_id: 427770117,
        })
        .reply(200, reply);

      const res = await client.exportChatInviteLink(427770117);
      expect(res).toEqual(result);
    });
  });

  describe('#setChatPhoto', () => {
    it('should set chat photo', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/setChatPhoto', {
          chat_id: 427770117,
          photo: 'https://example.com/image.png',
        })
        .reply(200, reply);

      const res = await client.setChatPhoto(
        427770117,
        'https://example.com/image.png'
      );
      expect(res).toEqual(result);
    });
  });

  describe('#deleteChatPhoto', () => {
    it('should delete chat photo', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/deleteChatPhoto', {
          chat_id: 427770117,
        })
        .reply(200, reply);

      const res = await client.deleteChatPhoto(427770117);
      expect(res).toEqual(result);
    });
  });

  describe('#setChatTitle', () => {
    it('should set chat title', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/setChatTitle', {
          chat_id: 427770117,
          title: 'New Title',
        })
        .reply(200, reply);

      const res = await client.setChatTitle(427770117, 'New Title');
      expect(res).toEqual(result);
    });
  });

  describe('#setChatDescription', () => {
    it('should set chat description', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/setChatDescription', {
          chat_id: 427770117,
          description: 'New Description',
        })
        .reply(200, reply);

      const res = await client.setChatDescription(427770117, 'New Description');
      expect(res).toEqual(result);
    });
  });

  describe('#setChatStickerSet', () => {
    it('should set a new group sticker set', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/setChatStickerSet', {
          chat_id: 427770117,
          sticker_set_name: 'Sticker Set Name',
        })
        .reply(200, reply);

      const res = await client.setChatStickerSet(427770117, 'Sticker Set Name');
      expect(res).toEqual(result);
    });
  });

  describe('#deleteChatStickerSet', () => {
    it('should set a new group sticker set', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/deleteChatStickerSet', {
          chat_id: 427770117,
        })
        .reply(200, reply);

      const res = await client.deleteChatStickerSet(427770117);
      expect(res).toEqual(result);
    });
  });

  describe('#pinChatMessage', () => {
    it('should pin a message in chat', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/pinChatMessage', {
          chat_id: 427770117,
          messsage_id: 1,
          disable_notification: true,
        })
        .reply(200, reply);

      const res = await client.pinChatMessage(427770117, 1, {
        disable_notification: true,
      });
      expect(res).toEqual(result);
    });
  });

  describe('#unpinChatMessage', () => {
    it('should unpin a message in chat', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/unpinChatMessage', {
          chat_id: 427770117,
        })
        .reply(200, reply);

      const res = await client.unpinChatMessage(427770117);
      expect(res).toEqual(result);
    });
  });

  describe('#leaveChat', () => {
    it('should leave chat', async () => {
      const { client, mock } = createMock();
      const result = true;
      const reply = {
        ok: true,
        result,
      };

      mock
        .onPost('/leaveChat', {
          chat_id: 427770117,
        })
        .reply(200, reply);

      const res = await client.leaveChat(427770117);
      expect(res).toEqual(result);
    });
  });
});
