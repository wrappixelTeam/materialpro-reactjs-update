import mock from './mock';
import './notes/NotesData';
import './chat/Chatdata';
import './contacts/ContactsData';
import './email/EmailData';
import './ticket/TicketData';
import './ecommerce/Shopitems'

mock.onAny().passThrough();
