import React, { Component } from 'react';
import FullWidthBlock from "../Components/FullWidthBlock";
import TextAndImg from "../Components/TextAndImg";

class CNNDetail extends Component {

    state = {
        img_struct: ["圖片是由像素構成，像素是由顏色構成，每個像素有RGB3個參數來表示顏色。",
    "假設一張1000x1000的圖片，就會有1000 x 1000 x 3 = 3,000,000個參數需要處理。",
    "因此圖片的數據處理是非常消耗硬體資源的！"
    ],
        convolution: ["在卷積層的運算中，有一個重要的東西叫做卷積核，他可以是一個隨機產生的矩陣，假設下圖是我們隨機產生的卷積核:"
    ],
        matrix: ["最後，原先維度6x6的原始影像矩陣，經過一個維度3x3的卷積核進行運算後，就可以得到16個矩陣乘積及加總。",
        "經由這16個加總值，我們可以得到一個4x4的矩陣:"
    ],
        features: ["經過卷積層與池化層運算後得到的特徵圖，會發現在矩陣的維度上縮小了，倘若後續要再進行一次的卷積、池化，特徵圖邊緣的影響力就會變小，為了解決這個問題，可以採取邊緣補零(padding)的方法，在原圖邊緣上加0，這樣得出的特徵圖既能保持跟原圖一樣大小，也能留住原圖的邊緣特徵，padding也可以根據需求設定，若padding=1，則原圖4x4的圖片會變為6x6;若padding=2則是8x8。原則上會與卷積核的尺寸、stride的大小一起做調整。"
    ],
        pooling: ["現今大多使用最大值池化的做法來降低維度，因為這樣能保留最顯著的特徵，計算上也較為簡便。延續我們剛剛得到的4x4矩陣，經過最大值池化後的結果如下(以維度2x2作為池化層的子矩陣大小設定):"
    ],
    }

    render() {
        
        return (
            <React.Fragment>
                <div className="container d-flex align-items-center flex-column">
                    <div>
                        <h2 className="title">Convolutional Neural Network 卷積神經網路</h2>
                    </div>
                    <div>
                        <p>卷積神經網路(以下稱CNN)是目前深度學習技術中極具代表性的一種類神經網路結構之一，CNN擅長處理圖片，而影片是圖片的疊加，所以CNN同樣擅長處理影片內容。常見的應用有:圖片分類、檢索,目標定位檢測,目標分割,人臉辨識。</p>
                    </div>
                    <FullWidthBlock py='4' my='4'>
                    <h2 className="title col-12">圖片的結構</h2>
                    <TextAndImg
                        my="5"
                        textWidth="9"
                        imgWidth="3"
                        textList={this.state.img_struct}
                        imgPath="/images/CNN_2.png"
                        imgPos="right"
                    />
                    </FullWidthBlock>
                    <div>
                        <h2 className="title">CNN運算過程</h2>
                        <p>CNN主要由3個部分構成:</p>
                        <p>1. 卷積層(Convolution layer)
                            2. 池化層(Pooling layer)
                            3. 全連接層(Fully connected layer)</p>
                        <p>卷積層負責提取圖片中的局部特徵，池化層用來大幅降低餐數量及(降維)，全連接層用來輸出想要的結果。而一個典型的CNN模型，通常是多層結構，最後再配以一個全連接層輸出結果，以下是一個經典CNN模型LeNet-5的結構：</p>
                        <p>卷積層-池化層-卷積層-池化層-卷積層-全連接層-輸出層</p>
                        <img src='/images/CNN_2.png'/>
                    </div>
                    <div>
                        <h2 className="title">卷積層</h2>
                        <TextAndImg
                            my="5"
                            textWidth="9"
                            imgWidth="3"
                            textList={this.state.convolution}
                            imgPath="/images/CNN_3.png"
                            imgPos="right"
                        />
                        <p>接下來，從原始圖片中取出與卷積核相同維度的矩陣進行運算乘積，可以得到</p>
                        <img src='/images/CNN_4.png'/>
                        <p>然後我們將矩陣中的值進行加總: (-6)+3+2+8+10+(-6)+1+(-3)+(-2)=7，此為原始影像經過第一次卷積運算後的結果。</p>
                        <p>接著向右平行一格，再進行一次卷積運算如下:</p>
                        <img src='/images/CNN_5.png'/>
                        <p>再做一次加總: (-2)+6+5+10+4+(-18)+3+(-2)+(-1)=5</p>
                        <p>以此類推，繼續往右平移做卷積運算，總共可以得到以下4個矩陣乘積及加總：</p>
                        <img src='/images/CNN_6.png'/>
                        <p>同理，垂直下移一行做卷積運算:</p>
                        <img src='/images/CNN_7.png'/>
                        <TextAndImg
                            my="5"
                            textWidth="9"
                            imgWidth="3"
                            textList={this.state.matrix}
                            imgPath="/images/CNN_8.png"
                            imgPos="right"
                        />
                        <p>以上就是原始影像經過卷積層運算後的初步結果。</p>
                        <FullWidthBlock py='4' my='4'>
                            <h2 className="title">關於卷積核</h2>
                            <p>由前述可知，卷積核的作用除了能降低圖片維度之外，最重要的功能就是找出特徵，針對越是大量、越是複雜的圖片時，我們也能透過增加卷積核的數量(在此稱為「深度(Depth)」)來萃取出不同的特徵，讓訓練出來的模型更加準確。</p>
                            <img src='/images/CNN_9.png'/>
                            <p>卷積核的尺寸也能夠自行定義，例如一張8x8的圖片經過維度3x3的卷積核運算後，可以得到一個6x6的矩陣特徵圖;而經過3x3的卷積核運算後，可以得到7x7的特徵圖。由此可知，若選擇的卷積核維度較大(3x3)，可以降低運算的次數，速度較快，若選擇的卷積核維度較小(2x2)，雖然會增加運算次數，但可以提高特徵擷取的準確度。</p>
                            <img src='/images/CNN_10.png'/>
                            <p>除了可以控制卷積核的維度外，在進行運算的過程中，也可以設定每次卷積核移動的步伐(stride)。前述範例中的平移一格，就是以stride=除了可以控制卷積核的維度外，在進行運算的過程中，也可以設定每次卷積核移動的步伐(stride)。前述範例中的平移一格，就是以stride=1的概念運作，若是我們將stride設為2的話，就能減少卷積運算的數量使整體運算速度加快，但同樣，會降低特徵擷取的準確度。</p>                            
                            <img src='/images/CNN_11.png'/>
                            <TextAndImg
                                my="4"
                                textWidth="8"
                                imgWidth="4"
                                textList={this.state.features}
                                imgPath="/images/CNN_12.png"
                                imgPos="right"
                            />
                        </FullWidthBlock>
                        <div>
                            <h2 className="title">池化層</h2>
                            <p>經過卷積層後得到的結果就會進入池化層，池化層主要的目的是保留主要特徵與降維。池化有許多種做法，其中兩種分別是「平均值池化(Average pooling)」與「最大值池化(Max pooling)」。</p>
                            <img src='/images/CNN_13.png'/>
                            <TextAndImg
                                my="5"
                                textWidth="9"
                                imgWidth="3"
                                textList={this.state.pooling}
                                imgPath="/images/CNN_14.png"
                                imgPos="right"
                            />
                            <p>如此一來，我們就能在降低圖片維度大小的同時，又能保留圖片的特徵。</p>
                        </div>
                        <div>
                            <h2 className="title">全連接層</h2>
                            <p>在經過了數層的卷積與池化後，接下來要把結果放入全連接層中運算。在CNN中，我們需要將先前得到的二維矩陣特徵圖攤平(Flatten)，變為一維的矩陣。假設我們得到3個維度為2x2的特徵圖，則可以進行以下操作:</p>
                            <img src='/images/CNN_15.png'/>
                            <p>最後將攤平的一維矩陣用來當成神經網路的輸入做訓練，就是整個CNN的運作過程</p>
                            <p>需要多少卷積層、池化層來進行組合，與在全連接層中應該使用多少層、每層多少神經元，都是訓練CNN模型需要考慮的問題。依照目標應用的不同，去進行調整和測試，最後的準確度越高，就是一個越好的CNN模型。</p>
                        </div>
                        <div className="container d-flex flex-column align-items-center border-neon">
                            <h2 className="title my-2">模型選擇</h2>
                            <div className="d-flex justify-content-center">
                                <a href='/cnn'><button className="btn btn-model mt-4 mx-3">圖像處理 CNN</button></a>
                                <a href='/cnn'><button className="btn btn-model mt-4 mx-3">物體辨識 YOLOv3</button></a>
                                <a href='/cnn'><button className="btn btn-model mt-4 mx-3">人臉辨識 FaceNet</button></a>
                            </div>
                                <a href='/CNN'><button className="btn btn-previous my-4">回到CNN簡介</button></a>
                            

                        </div>
                    </div>

                </div>
            </React.Fragment>
            
        );
    }
}

export default CNNDetail;