const express = require('express')

const { createMember, getMember, updateMember, deleteMember } = require('../controllers/members');
const authenticate = require('../middleware/auth');

const router = express.Router()


router.post('/', createMember)
router.get('/:id?', getMember);
router.put('/:id', authenticate, updateMember);
router.delete('/:id', authenticate, deleteMember)


module.exports = router;