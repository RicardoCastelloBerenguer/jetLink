import express from 'express';
import { nanoid } from 'nanoid';
import { validateUrl } from '../utils/utils.js';
import Url from '../models/Url.js';
import dotenv from 'dotenv';
import User from '../models/User.js';

const router  = express.Router();

router.get('/links/:userLogged', async (req, res) => {

  const {userLogged} = req.params;

  try{
    if(userLogged) {
      const urls = await Url.findAll({
        where: {
          userId : userLogged
        }
      })

      res.status(200).json({urls: urls});
    }
    else{
      res.status(400).json({message: 'Error: ' + "userLogged is not defined"});
    }
  }catch(error){
    console.log(error);
    res.status(500).json({message: 'Error: ' + error.message});
  }
})

router.get('/:shortLink', async (req, res) => {
  try {

    const shortLink = `${process.env.BASE_URL_BACK}/${req.params.shortLink}`

    

    const url = await Url.findOne({
      where: {
        shortUrl : shortLink
      }
    })

    if(url){
      url.clicks ++;

       await Url.update({ clicks: url.clicks++ }, {
        where: {
          shortUrl: url.shortUrl
        }
      });

      return res.redirect(url.origUrl);
    }
    else{
      // res.send(`${process.env.BASE_URL_FRONT}/error`);
      res.redirect(`${process.env.BASE_URL_FRONT}/error`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({'Server Error' : err.message});
  }
});

router.post('/short' , async (req, res) => {
    const { originalUrl } = req.body;
    const { userId } = req.body

    const base = process.env.BASE_URL_BACK;
    const urlId = nanoid(5)

    if(validateUrl(originalUrl)){
        try {
            const url = await Url.findOne({
                where: {
                  origUrl: originalUrl,
                },
              });
              if (url) {
                // La URL fue encontrada en la base de datos
                res.json({ message: 'URL encontrada', data: url });
              } else {
                // La URL no fue encontrada en la base de datos
                const shortUrl = `${base}/${urlId}`;
                
                

                if(userId){
                  const newUrl = await Url.create({
                      origUrl: originalUrl,
                      shortUrl: shortUrl,
                      userId : userId,
                      urlId: urlId,
                    });
                    res.json({ message: 'URL guardada correctamente', data: newUrl });
                }
                else {
                  const newUrl = await Url.create({
                    origUrl: originalUrl,
                    shortUrl: shortUrl,
                    urlId: urlId,
                  });
                  res.json({ message: 'URL guardada correctamente', data: newUrl });
                }

                

                
              }
        }catch(error){
            console.log(error);
            res.status(500).json({message: 'Error: ' + error.message});
        }
    }
    else{
        res.status(400).json('Invalid Original Url');
    }     
});

router.delete('/links/:urlId', async (req, res) => {
  const urlId = req.params.urlId

  // res.send(`${urlId}`);

  await Url.destroy({
    where: {
      id: urlId,
    },
  });

  res.status(200).json({message : 'OK' , url : urlId })

});

router.get((req, res) => {
  res.redirect(`${process.env.BASE_URL_FRONT}/error`);
});

export default router;