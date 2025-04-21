// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJWQXRLQlBlWUpSU21CL005cXp0REJWN2NYMHdsSFJHMXVlNk03b0psQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3VYemxNVGRYTnZSUEJEZ1F0eVlLdXkwY3FEVUlQa3JoT0FVL2tKbHh3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrT2l5Mjhlc2lrVUE4Q1luVFBGNThrTkVGUDJJaUZuUjloMkg3T3dqSW5jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKclJoZjdWRmhTRWpsTFdsTkZ1ZVVoUTIwVFphSWtwNVpqSlp3TW02NGlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtINWNoMXBvRWN2WWhnd2ZyVGJzOVBxQVF4emtRd0ZaaWxnRkRCQ2UrMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9nU2d3dVY3NXUzNzdoNm1ESGJJTW90RWRXZXh5MjY3RUtjWGhQby93RTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZFRis4RXlrYVFDTDg3VFdubE1vR09PQXNlcWZmUVA0bS9xVmFMdlNYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlVKUTh4TVkvbFFicTlOR05hT1hkQ2N6aDR6ZUJhL3dRbHA5ZFBnT2UyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBNklyK1lFU1ZGaDFiMzUvcXpWNTJHTU1tUmdDODI2Ky8zUHdaVE9sQ2hncTU4dXM1WDQvUnhsSDRONjhPYjhuSGdwYk5DZHU4RG5uZ2hlVzQ4REFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiI2NU5DeEphb2JLUjQza2lob1dxbzM1MSswTW5zaksvNitqVCtncXM1bDRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3Nzg3NjM1NDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU2QTE1OTdGQjU0NTUzRTcxRENCMTg3MEYwMzJGOEI0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUyNjQ5NTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3Nzg3NjM1NDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY3M0FENDMwNTEyRUZCMDc2RjhEQkQ4QTI0Mjc5ODZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUyNjQ5NTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVzcXpDTURCUlhlaUxrQjI3aW5jbVEiLCJwaG9uZUlkIjoiY2VkNTEwMTYtNTcyMS00NWVjLWIyYWQtOWJhNTg5ZWU2NTllIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldlcDR1QjFYOFhOTng2dVkxUmcwOXUzQk91QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOWTJTcFdYbDAvdzc2Wkc0NEJ6ZXpSUmdVaGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVhYRjRZVkciLCJtZSI6eyJpZCI6IjI3Nzg3NjM1NDIzOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiXCJZYW5lbGxhIENvZGVyXCJbw4ddIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZlR0ZDRERUozQ21zQUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYdFpnY0FnZFcwZFlkbnJQcTlWMXZrRFRnWXJYWHg4OGlZMnZHaGtERVdRPSIsImFjY291bnRTaWduYXR1cmUiOiIxc21Ta2E1ZXRwa3Z5TWI3bkxjSjVHUjRrbUsrL0JEVWpacExzSCt5WFBPblZLdCs0VWZjYi9KMTdJMGFIV2JTRS80d1lyYUZFWEgzcmNxRm5oM3ZEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiakpDVWtYbEp2TWo3Zi9BejI2Sm5jckxQNWxQMVdNaFh1dEZYMGUraXpzNXJHSUcyMHZObmdTazM1c1JtZ0dDWGZtNXl6VmpKTUZZbzMza2NwdFFaQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc4NzYzNTQyMzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY3V1lIQUlIVnRIV0haNno2dlZkYjVBMDRHSzExOGZQSW1OcnhvWkF4RmsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDUyNjQ5MzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRllXIn0=",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "Frank kaumba",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "265993702468",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
