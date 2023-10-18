import { declarations } from './declarations.js'
import { feedbackData } from './data.js'

//Render FeedBack
export const renderFeedback = function (id) {
    declarations.expContainer.innerHTML = ""
    declarations.inputFormContainer.innerHTML = ""
    declarations.inputFormContainer.classList.add("hidden")
    const data = feedbackData[id - 1]
    const markup = `
    <div class="experience-data dark-items">
                    <div class="personal-info">
                        <img class="logo-exp" src="img/${data.company}.png" alt="">
                        <div class="personal-data">
                            <p class="name-exp">Publisher : ${data.name}</p>
                            <p class="email">Email : ${data.email}</p>
                        </div>
                    </div>
                    <p class="company-exp">Company Name : ${data.company}</p>
                    <p class="role-exp">Role : ${data.role}</p>
                    <p class="package">Package : ${data.package}</p>
                    <p class="cgpa">CGPA : ${data.cgpa}</p>
                    <div class="rounds">
                        <p class="number-of-rounds">Number of Rounds : 4</p>
                        <ol class="rounds-exp">
                            <li class="round" id="r1">${data.roundsFeedback[0].round}
                                <ul class="questions">
                                    <li class="question">${data.roundsFeedback[0].questions[0]}</li>
                                    <li class="question">${data.roundsFeedback[0].questions[1]} </li>
                                </ul>
                            </li>
                            <li class="round" id="r2">${data.roundsFeedback[1].round}
                                <ul class="questions">
                                    <li class="question">${data.roundsFeedback[1].questions[0]} </li>
                                    <li class="question">${data.roundsFeedback[1].questions[1]}</li>
                                </ul>
                            </li>
                            <li class="round" id="r3">${data.roundsFeedback[2].round}
                                <ul class="questions">
                                    <li class="question">${data.roundsFeedback[2].questions[0]} </li>
                                    <li class="question">${data.roundsFeedback[2].questions[1]}</li>
                                </ul>
                            </li>
                            <li class="round" id="r4">${data.roundsFeedback[3].round}
                                <ul class="questions">
                                    <li class="question">${data.roundsFeedback[3].questions[0]} </li>
                                    <li class="question">${data.roundsFeedback[3].questions[1]}</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div class="rounds-skills-criteria">
                        <div class="skills">
                            <p class="skills-title">Skills Required :</p>
                            <ul class="skills-exp">
                                <li class="class">${data.skills[0]}</li>
                                <li class="class">${data.skills[1]}</li>
                                <li class="class">${data.skills[2]}</li>
                                <li class="class">${data.skills[3]}</li>
                            </ul>
                        </div>
                    </div>
                    <h4 class="feedback-exp">Experience : <br> 
                    <p class="feedback-txt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I appreciate the opportunity to interview for the
                    ${data.role} at ${data.company}.           
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The interview experience during the college placement drive was both insightful and challenging. With four rounds to navigate, it provided a comprehensive evaluation of our skills and competencies.
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first round, typically a technical interview, assessed our subject knowledge and problem-solving abilities. It was a valuable opportunity to showcase our expertise.
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The second round, often a group discussion, tested our communication and teamwork skills. It was a great platform to engage in meaningful discussions with peers.
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The third round, which focused on behavioral and situational questions, assessed our soft skills, adaptability, and decision-making.
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The final round, often an HR interview, allowed us to present our personal and professional aspirations while learning about the company's culture and values.
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall, the four rounds provided a holistic view of our abilities and helped us grow as professionals. The feedback received from interviewers was constructive, contributing to our continuous improvement. It was a challenging but rewarding experience that prepared us for future career opportunities.</p>
                    </h4>
                    <p class="verdict">Verdict : ${data.verdict}</p>
                </div>
    `
    declarations.expContainer.insertAdjacentHTML('afterbegin', markup)
}

function hidePageBtns() {
    declarations.prevBtn.classList.add('hidden-btns')
    declarations.nextBtn.classList.add('hidden-btns')
}

export function newblogBtnHandler() {
    window.location.hash = `#`
    declarations.inputFormContainer.classList.remove("hidden")
    declarations.inputFormContainer.innerHTML = ""
    declarations.expContainer.innerHTML = ""
    declarations.searchContainer.innerHTML = ""
    const markup = `
    <form action="#">
                        <div class="input-form">
                            <div class="input-col-1">
                                <label>Name : </label>
                                <input type="text" class="input-field dark-items" id="ip-name" placeholder="Enter Name" required>
                                <br><label>Email : </label>
                                <input type="email" class="input-field dark-items" id="ip-email"
                                    placeholder="Enter Email" required>
                                <br><label>Company : </label>
                                <input type="text" class="input-field dark-items" id="ip-company"
                                    placeholder="Enter Company Name" required>
                                <br><label>Package : </label>
                                <input type="number" class="input-field dark-items" id="ip-pack"
                                    placeholder="Enter Package" required>
                                <br><label>Role : </label>
                                <input type="text" class="input-field dark-items" id="ip-role" placeholder="Enter Role" required>
                                <br><label>Branch : </label>
                                <input type="text" class="input-field dark-items" id="ip-branch"
                                    placeholder="Enter Branch" required>
                                <br><label>Verdict : </label>
                                <select name="verdict" class="dark-items input-field" required>
                                    <option value="Selected">Select Option</option>
                                    <option value="Selected">Selected</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>

                            <div class="input-col-2">
                                <label>Round-1 : </label><input type="text" class="input-field  dark-items"
                                    id="ip-round-1" placeholder="Format: Round, Q1, Q2" required>
                                <br><label>Round-2 : </label><input type="text" class="input-field dark-items"
                                    id="ip-round-2" placeholder="Format: Round, Q1, Q2" required>
                                <br><label>Round-3: </label><input type="text" class="input-field dark-items"
                                    id="ip-round-3" placeholder="Format: Round, Q1, Q2" required>
                                <br><label>Round-4 : </label><input type="text" class="input-field dark-items"
                                    id="ip-round-4" placeholder="Format: Round, Q1, Q2" required>
                                <br><label>Round-1 : </label><input type="text" class="input-field dark-items"
                                    id="ip-round-1" placeholder="Enter Skill" required>
                                <br><label>Skill-2 : </label><input type="text" class="input-field dark-items"
                                    id="ip-Skill-2" placeholder="Enter Skill" required>
                                <br><label>Skill-3: </label><input type="text" class="input-field dark-items"
                                    id="ip-Skill-3" placeholder="Enter Skill" required>
                                <br><label>Skill-4 : </label><input type="text" class="input-field dark-items"
                                    id="ip-Skill-4" placeholder="Enter Skill" required>
                            </div>
                        </div>
                        <button class="submit-btn dark-items" type="submit">Submit</button>
                    </form>
    `
    declarations.inputFormContainer.insertAdjacentHTML('afterbegin', markup)
    hidePageBtns()
}

export function hashChangeHandler() {
    const urlId = window.location.hash.slice(1)
    if (!urlId) return
    renderFeedback(urlId)
    declarations.expContainer.scrollIntoView({ behavior: "smooth" })
}

export function DOMContentLoadedHandler() {
    const urlId = window.location.hash.slice(1)
    if (!urlId) return
    renderFeedback(urlId)
}