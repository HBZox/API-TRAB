import express from 'express';
import cors from 'cors'
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors())

app.post('/usuarios', async (req, res) => {
    try {
        const novoUsuario = await prisma.User.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });

        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.User.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ erro: 'Erro ao buscar usuários' });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const { email, name, age } = req.body;

        if (!email || !name || !age) {
            return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
        }

        const usuarioAtualizado = await prisma.User.update({
            where: {
                id: req.params.id
            },
            data: {
                email,
                name,
                age
            }
        });

        res.status(200).json(usuarioAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.User.delete({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);

        if (error.code === 'P2025') {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        res.status(500).json({ erro: 'Erro ao deletar usuário' });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});