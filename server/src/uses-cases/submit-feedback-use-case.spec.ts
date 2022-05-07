import { SubmitFeedbackUseCase } from "./feedback-use-case";


const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,fdskjfdslkfjdsf',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit a feedback empty type', async ()=>{
    
       await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
           screenshot: 'data:image/png;base64,fdskjfdslkfjdsf',
        })).rejects.toThrow();
  });
    it('should not be able to submit a feedback empty comment', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,fdskjfdslkfjdsf',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback empty SCREENCHOT', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });
});