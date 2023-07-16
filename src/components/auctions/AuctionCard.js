import React, { useContext } from "react";
import Countdown from "react-countdown";
import { AuthContext } from "../../context/AuthContext";

const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return null;
  }

  return (
    <div className="col">
      <div className="card shadow-sm md:h-full lg:w-[450px]">
        <div
          style={{
            height: "320px",
            backgroundImage: `url(${props.item.imgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="w-100"
        />

        <div className="card-body space-y-4">
          <p className="lead text-4xl">{props.item.title}</p>
          <div className="d-flex justify-content-between align-item-center font-bold">
            <h5 className="text-xl">
              {hours} hr: {minutes} min: {seconds} sec
            </h5>
          </div>
          <p className="text-xl">{props.item.desc}</p>
          <div className="d-flex justify-content-between align-item-center">
            <div className="">
              {props.item.curWinner ? (
                <p className="text-lg font-normal">
                  Current Highest Bidder:{" "}
                  <span className="font-medium">{props.item.curWinner}</span>
                </p>
              ) : (
                <p>No bids yet</p>
              )}
              {!props.owner ? (
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : props.owner.email === props.item.email ? (
                <div
                  onClick={() => props.endAuction(props.item.id)}
                  className="btn btn-outline-secondary my-4"
                >
                  Cancel Auction
                </div>
              ) : props.owner.email === props.item.curWinner ? (
                <div className="">
                  <p className="text-3xl py-4">Winner</p>
                </div>
              ) : (
                <div
                  onClick={() =>
                    props.bidAuction(props.item.id, props.item.curPrice)
                  }
                  className="btn btn-outline-secondary my-2"
                >
                  Bid
                </div>
              )}
            </div>
            <p className="display-6 my-4">${props.item.curPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuctionCard = ({ item }) => {
  let expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);

  return (
    <Countdown
      owner={currentUser}
      date={expiredDate}
      bidAuction={bidAuction}
      endAuction={endAuction}
      item={item}
      renderer={renderer}
    />
  );
};
